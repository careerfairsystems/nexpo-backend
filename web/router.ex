defmodule Nexpo.Router do
  use Nexpo.Web, :router

  # Needed for Sentry error logging
  if Mix.env() == :prod do
    use Plug.ErrorHandler
    use Sentry.Plug
  end

  pipeline :api do
    plug(:accepts, ["json"])
    plug(:fetch_session)
    plug(:fetch_flash)
  end

  pipeline :api_auth do
    plug(Guardian.Plug.VerifyHeader, realm: "Bearer")
    plug(Guardian.Plug.EnsureAuthenticated, handler: Nexpo.SessionController)
    plug(Guardian.Plug.LoadResource)
    plug(Guardian.Plug.EnsureResource, handler: Nexpo.SessionController)
  end

  # Allows us to see mails sent in dev to /sent_emails
  if Mix.env() == :dev do
    forward("/sent_emails", Bamboo.EmailPreviewPlug)
  end

  # Protected endpoints
  scope "/api", Nexpo do
    pipe_through([:api, :api_auth])

    get("/me", UserController, :show_me)
    put("/me", UserController, :update_me)
    delete("/me", UserController, :delete_me)
    put("/me/student", StudentController, :update_student)

    # post("/student_session_applications", StudentSessionApplicationController, :create) #STUDENT_SESSIONS_ACTIVE
    put("/me/student_session_applications/:id", StudentSessionApplicationController, :update_me)

    delete(
      "/me/student_session_applications/:id",
      StudentSessionApplicationController,
      :delete_me
    )

    put("/me/student_sessions/:id", StudentSessionController, :update_me)
    get("/me/company", CompanyController, :show_me)
    put("/me/company", CompanyController, :update_me)
    delete("/me/company", CompanyController, :delete_me)
    post("/me/company/invite_representative", SignupController, :invite_representative)

    resources("/users", UserController, only: [:index, :show, :update, :delete])
    resources("/roles", RoleController)
    resources("/statistics", StatisticsController, only: [:index])

    resources "/students", StudentController do
      # resources("/student_session_applications", StudentSessionApplicationController)
    end

    post("/initial_representative_signup", SignupController, :create_representative)
    resources("/representatives", RepresentativeController)

    put("/companies/:id", CompanyController, :update)

    resources "/companies", CompanyController do
      resources("/desired_programmes", DesiredProgrammeController)
    end

    post("/companies/create_bulk", CompanyController, :create_bulk)

    resources("/industries", IndustryController)
    resources("/job_offers", JobOfferController)
    resources("/interests", InterestController)
    resources("/categories", CategoryController)
    resources("/programmes", ProgrammeController)
    resources("/deadlines", DeadlineController)
    resources("/mailtemplates", MailtemplateController)
    resources("/student_sessions", StudentSessionController, only: [:create, :delete])
    patch("/student_sessions", StudentSessionController, :create_bulk)
    delete("/student_sessions", StudentSessionController, :delete_bulk)
    get("/student_sessions", StudentSessionController, :show)
    get("/student_session_info", StudentSessionController, :show_all)
    get("/student_session_reserves", StudentSessionController, :show_reserves)

    resources("/me/company/blips", BlipController,
      only: [:create, :update, :show, :delete, :index]
    )

    delete("/event/ticket/:id", EventController, :remove_ticket)
    put("/event/ticket", EventController, :create_ticket)
    get("/event/tickets", EventController, :get_tickets)
    get("/admin/event/tickets", EventController, :get_all_tickets)

    # TODO implement
    # get("/me/company/reps", BlipController, :get_reps)
  end

  # Not-protected endpoints
  scope "/api", Nexpo do
    pipe_through(:api)

    post("/login", SessionController, :create)

    get("/company/logo/:id", CompanyController, :get_logo)

    get("/uploads/users/:id/image/:key", UserController, :get_picture2)
    get("/uploads/companies/:id/logo/:key", CompanyController, :get_logo2)
    get("/uploads/students/:id/cv/:lang/:key", StudentController, :get_cv2)

    resources("/events", EventController, only: [:index])
    get("/event/:id", EventController, :get_event)

    post("/initial_signup", SignupController, :create)
    get("/initial_signup/:key", SignupController, :get_current_signup)
    post("/final_signup/:signup_key", SignupController, :final_create)

    post("/password/forgot", UserController, :forgot_password_init)
    get("/password/forgot/:key", UserController, :forgot_password_verification)
    post("/password/new/:key", UserController, :replace_forgotten_password)
  end
end
