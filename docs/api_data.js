define({ "api": [
  {
    "type": "DELETE",
    "url": "/api/me/company/blips/:student_id",
    "title": "Unblip - Delete a blip",
    "group": "Blips",
    "description": "<p>Delete comment, rating and the blip itself from a student who blipped your company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_id",
            "description": "<p>The id of the student</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 204 NoContent\n(empty resp)",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/blip_controller.ex",
    "groupTitle": "Blips",
    "name": "DeleteApiMeCompanyBlipsStudent_id",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/me/company/blips",
    "title": "List blips",
    "group": "Blips",
    "description": "<p>List all students that have blipd by your booth</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [\n      {\n        \"year\": null,\n        \"student_id\": 3,\n        \"resume_sv_url\": null,\n        \"resume_en_url\": null,\n        \"rating\": 4,\n        \"programme\": null,\n        \"profile_image\": null,\n        \"master\": null,\n        \"linked_in\": null,\n        \"last_name\": \"Student\",\n        \"interests\": [],\n        \"inserted_at\": \"2020-10-24T14:44:18.430950\",\n        \"first_name\": \"Charlie\",\n        \"email\": \"student3@test.com\",\n        \"comment\": \"who dis?\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/blip_controller.ex",
    "groupTitle": "Blips",
    "name": "GetApiMeCompanyBlips",
    "error": {
      "examples": [
        {
          "title": "Forbidden",
          "content": "HTTP 403 Forbidden",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/me/company/blips/:student_id",
    "title": "Student Info & blip data",
    "group": "Blips",
    "description": "<p>Gets information about a student and your comments about them</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"year\": null,\n  \"student_id\": 3,\n  \"resume_sv_url\": null,\n  \"resume_en_url\": null,\n  \"rating\": 4,\n  \"programme\": null,\n  \"profile_image\": null,\n  \"master\": null,\n  \"linked_in\": null,\n  \"last_name\": \"Student\",\n  \"interests\": [],\n  \"inserted_at\": \"2020-10-24T14:44:18.430950\",\n  \"first_name\": \"Charlie\",\n  \"email\": \"student3@test.com\",\n  \"comment\": \"who dis?\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/blip_controller.ex",
    "groupTitle": "Blips",
    "name": "GetApiMeCompanyBlipsStudent_id",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PATCH",
    "url": "/api/me/company/blips/:student_id",
    "title": "Update blip info",
    "group": "Blips",
    "description": "<p>Update the comment or rating of a student scanned by this company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rating",
            "description": "<p>The new rating in JSON body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The new comment in JSON body</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": {\n    \"rating\": 2,\n    \"id\": 3,\n    \"comment\": \"haha\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/blip_controller.ex",
    "groupTitle": "Blips",
    "name": "PatchApiMeCompanyBlipsStudent_id",
    "error": {
      "fields": {
        "UnprocessableEntity 422": [
          {
            "group": "UnprocessableEntity 422",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Object containing errors</p>"
          },
          {
            "group": "UnprocessableEntity 422",
            "type": "String[]",
            "optional": false,
            "field": "errors.[unprocessable-key]",
            "description": "<p>Array of String error messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/me/company/blips",
    "title": "Create a blip for student",
    "group": "Blips",
    "description": "<p>Create/ a comment of a student that has blipped your company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_id",
            "description": "<p>Id of student blips</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rating",
            "description": "<p>Optional, rating between 1 and five</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Optional, Your thoughts about the student</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"student_id\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n  \"data\": {\n    \"student\": {\n      \"year\": null,\n      \"user_id\": 4,\n      \"resume_sv_url\": null,\n      \"resume_en_url\": null,\n      \"master\": null,\n      \"linked_in\": null,\n      \"id\": 3\n    },\n    \"rating\": 2,\n    \"id\": 9,\n    \"company_id\": 1,\n    \"comment\": \"haha\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/blip_controller.ex",
    "groupTitle": "Blips",
    "name": "PostApiMeCompanyBlips",
    "error": {
      "fields": {
        "UnprocessableEntity 422": [
          {
            "group": "UnprocessableEntity 422",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Object containing errors</p>"
          },
          {
            "group": "UnprocessableEntity 422",
            "type": "String[]",
            "optional": false,
            "field": "errors.[unprocessable-key]",
            "description": "<p>Array of String error messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Forbidden",
          "content": "HTTP 403 Forbidden",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/categories/",
    "title": "Create category",
    "name": "Create_Category",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Internal ID</p>"
          },
          {
            "group": "Created 201",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/controllers/category_controller.ex",
    "groupTitle": "Category",
    "error": {
      "fields": {
        "UnprocessableEntity 422": [
          {
            "group": "UnprocessableEntity 422",
            "type": "Object",
            "optional": false,
            "field": "errors",
            "description": "<p>Object containing errors</p>"
          },
          {
            "group": "UnprocessableEntity 422",
            "type": "String[]",
            "optional": false,
            "field": "errors.[unprocessable-key]",
            "description": "<p>Array of String error messages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Internal server error",
          "content": "HTTP 500 Internal server error",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/categories",
    "title": "List categories",
    "group": "Category",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"title\": \"Example category\",\n      \"attributes\": []\n      },\n      {\n        \"id\": 2,\n        \"title\": \"Other category\",\n        \"attributes\": []\n      }\n    ]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/category_controller.ex",
    "groupTitle": "Category",
    "name": "GetCategories",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Internal server error",
          "content": "HTTP 500 Internal server error",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/categories/:id",
    "title": "Get category",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "OK 200": [
          {
            "group": "OK 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Internal ID</p>"
          },
          {
            "group": "OK 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok\n{\n  \"data\": {\n    \"id\": 1,\n    \"title\": \"Example category\",\n    \"attributes\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/category_controller.ex",
    "groupTitle": "Category",
    "name": "GetCategoriesId",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Internal server error",
          "content": "HTTP 500 Internal server error",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/me/company/representatives",
    "title": "List company representatives",
    "group": "Company",
    "description": "<p>Gets contact information for the student hosts for the company a the user is associated with</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [{\n    \"first_name\": \"Lisa\",\n    \"last_name\": \"Svensson\",\n    \"phone_number\": \"555123456\",\n    \"email\": \"lisa@hotmail.com\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/mock_controller.ex",
    "groupTitle": "Company",
    "name": "GetApiMeCompanyRepresentatives",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/companies",
    "title": "List companies",
    "group": "Company",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"CodeComp\",\n      \"description\": \"We do code!\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Other Comp\",\n      \"description\": \"We do other things!\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "GetCompanies",
    "error": {
      "examples": [
        {
          "title": "Internal server error",
          "content": "HTTP 500 Internal server error",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/companies/:id",
    "title": "Get company",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the company</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok\n{\n  \"data\": {\n    \"id\": 1,\n    \"name\": \"CodeComp\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "GetCompaniesId",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Internal server error",
          "content": "HTTP 500 Internal server error",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "api/password/forgot/:key",
    "title": "Verify password forgotten",
    "group": "Forgot_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key representing a password reset</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n  \"type\": \"message\",\n  \"data\": \"Exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "Forgot_password",
    "name": "GetApiPasswordForgotKey",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "api/password/forgot",
    "title": "Init reset of password",
    "group": "Forgot_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n  \"type\": \"message\",\n  \"data\": \"Sending email if user exists\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "Forgot_password",
    "name": "PostApiPasswordForgot",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "api/password/new/:key",
    "title": "Reset forgotten password",
    "group": "Forgot_password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Key representing this password reset</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Confirmation of password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n  \"type\": \"message\",\n  \"data\": \"Successfully changed password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "Forgot_password",
    "name": "PostApiPasswordNewKey",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "Login",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 201 Created\n{\n  \"data\": {\n    \"jwt\": \"randomly-generated-string\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/session_controller.ex",
    "groupTitle": "Login",
    "name": "PostLogin",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        },
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/initial_signup/:signup_key",
    "title": "Get current signup",
    "group": "Sign_up",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signup_key",
            "description": "<p>Signup key of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Created\n{\n  \"data\": {\n    \"id\": 1,\n    \"email\": \"username@domain\"\n    \"first_name\": \"Benjamin\",\n    \"last_name\": \"Franklin\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/signup_controller.ex",
    "groupTitle": "Sign_up",
    "name": "GetInitial_signupSignup_key",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/final_signup/:signup_key",
    "title": "Finish sign up",
    "group": "Sign_up",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signup_key",
            "description": "<p>Signup key of user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Wanted password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_confirmation",
            "description": "<p>Confirmation of password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>First name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Last name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK\n{\n  \"data\": {\n    \"id\": 1,\n    \"email\": \"username@student.lu.se\"\n    \"first_name\": \"Benjamin\",\n    \"last_name\": \"Franklin\",\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/signup_controller.ex",
    "groupTitle": "Sign_up",
    "name": "PostFinal_signupSignup_key",
    "error": {
      "examples": [
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/initial_signup",
    "title": "Initiate sign up",
    "group": "Sign_up",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 201 Created\n{\n  \"data\": {\n    \"id\": 1,\n    \"email\": \"username@domain\"\n    \"first_name\": null,\n    \"last_name\": null,\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/signup_controller.ex",
    "groupTitle": "Sign_up",
    "name": "PostInitial_signup",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "api/me",
    "title": "Delete user",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "User",
    "name": "DeleteApiMe",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "api/me",
    "title": "Request user information",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP 200 OK\n  {\n    \"data\": {\n      \"student\": {\n        \"year\": null,\n        \"user_id\": 2,\n        \"student_sessions\": [\n          {\n            \"student_session_time_slot\": {\n              \"start\": \"2000-01-01T08:00:00.000000\",\n              \"location\": \"Albatraoz\",\n              \"id\": 1,\n              \"end\": \"2000-01-01T08:15:00.000000\"\n            },\n            \"student_session_status\": 1,\n            \"student_id\": 1,\n            \"id\": 1,\n            \"company_id\": 1,\n            \"company\": {\n              \"website\": \"www.google.com\",\n              \"top_students\": [],\n              \"student_session_days\": 1,\n              \"name\": \"Google\",\n              \"logo_url\": null,\n              \"id\": 1,\n              \"host_phone_number\": null,\n              \"host_name\": null,\n              \"host_mail\": null,\n              \"description\": \"We code!\"\n            }\n          }\n        ],\n        \"student_session_applications\": [\n          {\n            \"student_id\": 1,\n            \"score\": 5,\n            \"motivation\": \"\",\n            \"id\": 1,\n            \"company_id\": 1,\n            \"company\": {\n              \"website\": \"www.google.com\",\n              \"top_students\": [],\n              \"student_session_days\": 1,\n              \"name\": \"Google\",\n              \"logo_url\": null,\n              \"id\": 1,\n              \"host_phone_number\": null,\n              \"host_name\": null,\n              \"host_mail\": null,\n              \"description\": \"We code!\"\n            }\n          }\n        ],\n        \"resume_sv_url\": null,\n        \"resume_en_url\": null,\n        \"programme\": null,\n        \"master\": null,\n        \"linked_in\": null,\n        \"interests\": [],\n        \"id\": 1,\n        \"event_tickets\": [\n          {\n            \"ticket_code\": \"$2b$04$AL20RQhngqq.m8risJDwYOYrwOkyWPeDAV5FTJlYlErhxUgphTnlW\",\n            \"photo\": true,\n            \"id\": 1,\n            \"event_id\": 1\n          }\n        ]\n      },\n      \"roles\": [],\n      \"representative\": null,\n      \"profile_image\": null,\n      \"phone_number\": \"0708334455\",\n      \"last_name\": \"Student\",\n      \"id\": 2,\n      \"food_preferences\": \"\",\n      \"first_name\": \"Alfa\",\n      \"email\": \"student1@test.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "User",
    "name": "GetApiMe",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "api/me",
    "title": "Update user information",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "User",
            "description": "<p>Same structure as information recieved when requesting information</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "User",
    "name": "PostApiMe",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        }
      ]
    }
  }
] });
