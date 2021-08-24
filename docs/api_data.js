define({ "api": [
  {
    "type": "DELETE",
    "url": "/api/me/student_session_applications/:id",
    "title": "Delete an application",
    "group": "Application",
    "description": "<p>Delete an application that this student made</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the application</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_application_controller.ex",
    "groupTitle": "Application",
    "name": "DeleteApiMeStudent_session_applicationsId",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
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
    "url": "/api/categories/",
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
    "url": "/api/categories",
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
    "name": "GetApiCategories",
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
    "url": "/api/categories/:id",
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
    "name": "GetApiCategoriesId",
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
    "type": "DELETE",
    "url": "/api/companies/:id",
    "title": "Delete a company",
    "group": "Companies",
    "description": "<p>Completely remove a company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the company</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Companies",
    "name": "DeleteApiCompaniesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/api/companies/:id",
    "title": "Update a company",
    "group": "Companies",
    "description": "<p>Update a company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "company",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.name",
            "description": "<p>Optional, Name of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.description",
            "description": "<p>Optional, Description of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.website",
            "description": "<p>Optional, URL of company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.student_session_days",
            "description": "<p>Optional, Days of student sessions</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.host_name",
            "description": "<p>Optional, Name of host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.host_mail",
            "description": "<p>Optional, Mail of host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.host_phone_number",
            "description": "<p>Optional, Phone number of host</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Companies",
    "name": "PutApiCompaniesId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/me/company",
    "title": "Delete company completely",
    "group": "Company",
    "description": "<p>As a representative, delete company</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "DeleteApiMeCompany",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/companies",
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
    "name": "GetApiCompanies",
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
    "url": "/api/companies/:id",
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
    "name": "GetApiCompaniesId",
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
    "url": "/api/company/logo/:id",
    "title": "Get company logo",
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
          "content": "HTTP 200 Ok\nimage",
          "type": "image/png"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "GetApiCompanyLogoId",
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
    "url": "/api/me/company",
    "title": "Get company and related information",
    "group": "Company",
    "description": "<p>As a representative, get company information, student applications and more</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "GetApiMeCompany",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
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
    "type": "POST",
    "url": "/api/companies",
    "title": "Create a company",
    "group": "Company",
    "description": "<p>Create a company</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "company",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.name",
            "description": "<p>Name of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.description",
            "description": "<p>Description of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.website",
            "description": "<p>URL of company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.student_session_days",
            "description": "<p>Optional, Days of student sessions</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.host_name",
            "description": "<p>Optional, Name of host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.host_mail",
            "description": "<p>Optional, Mail of host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company.host_phone_number",
            "description": "<p>Optional, Phone number of host</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"website\": \"hello\",\n    \"top_students\": [],\n    \"student_session_days\": 0,\n    \"name\": \"brofist\",\n    \"logo_url\": null,\n    \"id\": 6,\n    \"host_phone_number\": null,\n    \"host_name\": null,\n    \"host_mail\": null,\n    \"description\": \"we do this here\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "PostApiCompanies",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/companies/create_bulk",
    "title": "Create companies and representatives",
    "group": "Company",
    "description": "<p>Create companies and associated representatives in bulk</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "companies",
            "description": "<p>Nested JSON object containing multiple company_params</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companies.company1.name",
            "description": "<p>Name of company1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companies.company1.description",
            "description": "<p>Description of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companies.company1.website",
            "description": "<p>URL of company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companies.company1.student_session_days",
            "description": "<p>Optional, Days of student sessions</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companies.company1.host_name",
            "description": "<p>Optional, Name of host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companies.company1.host_mail",
            "description": "<p>Optional, Mail of host</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "companies.company1.host_phone_number",
            "description": "<p>Optional, Phone number of host</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "representatives",
            "description": "<p>Nested JSON object containing multiple representative_params</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "representatives.representative1.user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "representatives.representative1.company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "PostApiCompaniesCreate_bulk",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/me/company/initial_representative_signup",
    "title": "Create representative",
    "group": "Company",
    "description": "<p>As a company, create a representative</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user to invite</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the company</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 201 Created",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/signup_controller.ex",
    "groupTitle": "Company",
    "name": "PostApiMeCompanyInitial_representative_signup",
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
        },
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
    "url": "/api/me/company/invite_representative",
    "title": "Invite representative",
    "group": "Company",
    "description": "<p>As a company, invite a representative</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user to invite</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the company</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 201 Created",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/signup_controller.ex",
    "groupTitle": "Company",
    "name": "PostApiMeCompanyInvite_representative",
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
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/api/me/company",
    "title": "Update company website and description",
    "group": "Company",
    "description": "<p>As a representative, update company website and description</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "company",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.description",
            "description": "<p>Description of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.website",
            "description": "<p>Company URL</p>"
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
    "filename": "web/controllers/company_controller.ex",
    "groupTitle": "Company",
    "name": "PutApiMeCompany",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
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
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/deadlines/:id",
    "title": "Delete a deadline",
    "group": "Deadlines",
    "description": "<p>Completely remove a deadline</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of deadline</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/deadline_controller.ex",
    "groupTitle": "Deadlines",
    "name": "DeleteApiDeadlinesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/deadlines",
    "title": "Get all deadlines",
    "group": "Deadlines",
    "description": "<p>Fetch all available deadlines</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/deadline_controller.ex",
    "groupTitle": "Deadlines",
    "name": "GetApiDeadlines",
    "error": {
      "examples": [
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
    "url": "/api/deadlines/:id",
    "title": "Get a deadline",
    "group": "Deadlines",
    "description": "<p>Fetch a single deadline</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the deadline</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/deadline_controller.ex",
    "groupTitle": "Deadlines",
    "name": "GetApiDeadlinesId",
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
    "type": "POST",
    "url": "/api/deadlines",
    "title": "Create a deadline",
    "group": "Deadlines",
    "description": "<p>Create a deadline</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deadline.name",
            "description": "<p>Name of deadline (application deadline etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Naive_datetime",
            "optional": false,
            "field": "deadline.start",
            "description": "<p>Start of deadline</p>"
          },
          {
            "group": "Parameter",
            "type": "Naive_datetime",
            "optional": false,
            "field": "deadline.end",
            "description": "<p>End of deadline</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"name\": \"Host Applications\",\n    \"start\": \"2000-01-01 23:00:00\",\n    \"end\": \"2040-01-01 23:00:00\",\n    \"id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/deadline_controller.ex",
    "groupTitle": "Deadlines",
    "name": "PostApiDeadlines",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/deadlines/:id",
    "title": "Update a deadline",
    "group": "Deadlines",
    "description": "<p>Update a deadline</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deadline.name",
            "description": "<p>Name of deadline (application deadline etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "Naive_datetime",
            "optional": false,
            "field": "deadline.start",
            "description": "<p>Start of deadline</p>"
          },
          {
            "group": "Parameter",
            "type": "Naive_datetime",
            "optional": false,
            "field": "deadline.end",
            "description": "<p>End of deadline</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/deadline_controller.ex",
    "groupTitle": "Deadlines",
    "name": "PutApiDeadlinesId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/desired_programmes",
    "title": "Create a desired programme",
    "group": "Desired_Programmes",
    "description": "<p>Create a desired programme</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "desired_programme",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "desired_programme.score",
            "description": "<p>Score</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "desired_programme.company_id",
            "description": "<p>Desired company id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "desired_programme.programme_id",
            "description": "<p>Desired programme id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"user_id\": 3,\n    \"id\": 6,\n    \"company_id\": 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/desired_programme_controller.ex",
    "groupTitle": "Desired_Programmes",
    "name": "PostApiDesired_programmes",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/event/ticket/:id",
    "title": "Delete a ticket",
    "group": "Events",
    "description": "<p>Remove a ticket for this student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the event</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/event_controller.ex",
    "groupTitle": "Events",
    "name": "DeleteApiEventTicketId",
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
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/users/:id",
    "title": "Delete a user",
    "group": "Events",
    "description": "<p>Remove a user as admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "Events",
    "name": "DeleteApiUsersId",
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
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/admin/event/tickets",
    "title": "Get all event tickets",
    "group": "Events",
    "description": "<p>Fetch all event tickets as admin</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [\n    {\n      \"ticket_code\": \"$2b$04$ma5/mqWtDmFJqF2jds3.o.esB5UNBYv7t4ZPwwkbHe5tABYdhWm0C\",\n      \"photo\": true,\n      \"id\": 35,\n      \"event_id\": 1\n    },\n    {\n      \"ticket_code\": \"$2b$04$8fvB3uOgGfxWyBkihEJyW.hsN6YtJJ5ohxc28dg3B4QOuLSelTpLm\",\n      \"photo\": false,\n      \"id\": 36,\n      \"event_id\": 2\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/event_controller.ex",
    "groupTitle": "Events",
    "name": "GetApiAdminEventTickets",
    "error": {
      "examples": [
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
    "url": "/api/event/:id",
    "title": "Get an event",
    "group": "Events",
    "description": "<p>Fetch a single event</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the event</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": {\n    \"tickets\": 19,\n    \"start\": \"15:10\",\n    \"name\": \"Bounce\",\n    \"location\": \"Outside Kårhuset, bus to Malmö\",\n    \"id\": 1,\n    \"event_info\": {\n      \"capacity\": 20,\n      \"language\": null,\n      \"id\": 1,\n      \"host\": null,\n      \"description\": \"Placeholder\"\n    },\n    \"end\": \"17:30\",\n    \"date\": \"Nov 3rd - Sunday\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/event_controller.ex",
    "groupTitle": "Events",
    "name": "GetApiEventId",
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
    "url": "/api/event/tickets",
    "title": "Get tickets",
    "group": "Events",
    "description": "<p>Fetch all tickets for this student</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [\n    {\n      \"ticket_code\": \"$2b$04$WbQloXKuTH02YJ4bqzuPCOcFakIKwXJI74Wce.jJsBq7RJHqsn6g.\",\n      \"photo\": null,\n      \"id\": 1,\n      \"event_id\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/event_controller.ex",
    "groupTitle": "Events",
    "name": "GetApiEventTickets",
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
    "url": "/api/events",
    "title": "Get all events",
    "group": "Events",
    "description": "<p>Fetch all available events</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [\n    {\n      \"start\": \"15:10\",\n      \"name\": \"Bounce\",\n      \"location\": \"Outside Kårhuset, bus to Malmö\",\n      \"id\": 1,\n      \"end\": \"17:30\",\n      \"date\": \"Nov 3rd - Sunday\",\n      \"capacity\": 20,\n      \"tickets\": 2\n    },\n    {\n      \"start\": \"17:15\",\n      \"name\": \"The digital shift - how will you be affected?\",\n      \"location\": \"Kårhuset: Auditorium\",\n      \"id\": 2,\n      \"end\": \"18:45\",\n      \"date\": \"Nov 4rd - Monday\",\n      \"capacity\": 20,\n      \"tickets\": 10\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/event_controller.ex",
    "groupTitle": "Events",
    "name": "GetApiEvents"
  },
  {
    "type": "PUT",
    "url": "/api/event/ticket",
    "title": "Create ticket",
    "group": "Events",
    "description": "<p>Create a ticket for this student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "event_id",
            "description": "<p>Id of event</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "photo",
            "description": "<p>If student allows taking photos of themselves</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"event_id\": 1\n  \"photo\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": [\n    {\n      \"ticket_code\": \"$2b$04$WbQloXKuTH02YJ4bqzuPCOcFakIKwXJI74Wce.jJsBq7RJHqsn6g.\",\n      \"photo\": true,\n      \"id\": 1,\n      \"event_id\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/event_controller.ex",
    "groupTitle": "Events",
    "name": "PutApiEventTicket",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ],
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
      }
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
    "type": "DELETE",
    "url": "/api/industries/:id",
    "title": "Delete a industry",
    "group": "Industries",
    "description": "<p>Completely remove a industry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of industry</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/industry_controller.ex",
    "groupTitle": "Industries",
    "name": "DeleteApiIndustriesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/industries",
    "title": "Get all industries",
    "group": "Industries",
    "description": "<p>Fetch all available industries</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/industry_controller.ex",
    "groupTitle": "Industries",
    "name": "GetApiIndustries",
    "error": {
      "examples": [
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
    "url": "/api/representatives/:id",
    "title": "Get an industry",
    "group": "Industries",
    "description": "<p>Fetch a single industry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the industry</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/industry_controller.ex",
    "groupTitle": "Industries",
    "name": "GetApiRepresentativesId",
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
    "type": "POST",
    "url": "/api/industries",
    "title": "Create an industry",
    "group": "Industries",
    "description": "<p>Create an industry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "industry.name",
            "description": "<p>Name of industry</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"name\": \"dil\",\n    \"id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/industry_controller.ex",
    "groupTitle": "Industries",
    "name": "PostApiIndustries",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/industries/:id",
    "title": "Update an industry",
    "group": "Industries",
    "description": "<p>Update an industry</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of industry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "industry.name",
            "description": "<p>Name of industry</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/industry_controller.ex",
    "groupTitle": "Industries",
    "name": "PutApiIndustriesId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/interests/:id",
    "title": "Delete an interest",
    "group": "Interests",
    "description": "<p>Completely remove an interest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of interest</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/interest_controller.ex",
    "groupTitle": "Interests",
    "name": "DeleteApiInterestsId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/interests",
    "title": "Get all interests",
    "group": "Interests",
    "description": "<p>Fetch all available interests</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/interest_controller.ex",
    "groupTitle": "Interests",
    "name": "GetApiInterests",
    "error": {
      "examples": [
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
    "url": "/api/interests/:id",
    "title": "Get an interest",
    "group": "Interests",
    "description": "<p>Fetch a single interest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the interest</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/interest_controller.ex",
    "groupTitle": "Interests",
    "name": "GetApiInterestsId",
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
    "type": "POST",
    "url": "/api/interests",
    "title": "Create an interest",
    "group": "Interests",
    "description": "<p>Create an interest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interest.name",
            "description": "<p>Name of interest</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"name\": \"interest1\",\n    \"id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/interest_controller.ex",
    "groupTitle": "Interests",
    "name": "PostApiInterests",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/interests/:id",
    "title": "Update an interest",
    "group": "Interests",
    "description": "<p>Update an interest</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of interest</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "interest.name",
            "description": "<p>Name of interest</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/interest_controller.ex",
    "groupTitle": "Interests",
    "name": "PutApiInterestsId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/job_offer/:id",
    "title": "Delete a job offer",
    "group": "Job_Offer",
    "description": "<p>Completely remove a job offer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of job offer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/job_offer_controller.ex",
    "groupTitle": "Job_Offer",
    "name": "DeleteApiJob_offerId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/api/job_offers/:id",
    "title": "Update a job offer",
    "group": "Job_Offer",
    "description": "<p>Update a job offer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of job offer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_offer.type",
            "description": "<p>Type of industry</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/job_offer_controller.ex",
    "groupTitle": "Job_Offer",
    "name": "PutApiJob_offersId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/job_offers",
    "title": "Get all job offers",
    "group": "Job_Offers",
    "description": "<p>Fetch all available job offers</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/job_offer_controller.ex",
    "groupTitle": "Job_Offers",
    "name": "GetApiJob_offers",
    "error": {
      "examples": [
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
    "url": "/api/job_offers/:id",
    "title": "Get a job offer",
    "group": "Job_Offers",
    "description": "<p>Fetch a single job offer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the job offer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/job_offer_controller.ex",
    "groupTitle": "Job_Offers",
    "name": "GetApiJob_offersId",
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
    "type": "POST",
    "url": "/api/job_offers",
    "title": "Create a job offer",
    "group": "Job_Offers",
    "description": "<p>Create a job offer</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_offer.type",
            "description": "<p>Type of job offer</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"type\": \"Job\",\n    \"id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/job_offer_controller.ex",
    "groupTitle": "Job_Offers",
    "name": "PostApiJob_offers",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/login",
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
    "name": "PostApiLogin",
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
    "type": "DELETE",
    "url": "/api/mailtemplates/:id",
    "title": "Delete a mailtemplate",
    "group": "Mailtemplates",
    "description": "<p>Completely remove a mailtemplate</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of mailtemplate</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/mailtemplate_controller.ex",
    "groupTitle": "Mailtemplates",
    "name": "DeleteApiMailtemplatesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/mailtemplates",
    "title": "Get all mailtemplates",
    "group": "Mailtemplates",
    "description": "<p>Fetch all available mailtemplates</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/mailtemplate_controller.ex",
    "groupTitle": "Mailtemplates",
    "name": "GetApiMailtemplates",
    "error": {
      "examples": [
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
    "url": "/api/mailtemplates/:id",
    "title": "Get a mailtemplate",
    "group": "Mailtemplates",
    "description": "<p>Fetch a single mailtemplate</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the mailtemplate</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/mailtemplate_controller.ex",
    "groupTitle": "Mailtemplates",
    "name": "GetApiMailtemplatesId",
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
    "type": "POST",
    "url": "/api/mailtemplates",
    "title": "Create a mailtemplate",
    "group": "Mailtemplates",
    "description": "<p>Create a mailtemplate</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.name",
            "description": "<p>Name of mailtemplate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.subject",
            "description": "<p>Subject of mailtemplate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.content",
            "description": "<p>Content of mailtemplate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.signature",
            "description": "<p>Optional, mail signature</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"subject\": \"Arkad Invite\",\n    \"signature\": \"Tommy Nilsson\",\n    \"name\": \"Template\",\n    \"id\": 5,\n    \"content\": \"Yoyo\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/mailtemplate_controller.ex",
    "groupTitle": "Mailtemplates",
    "name": "PostApiMailtemplates",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/mailtemplates/:id",
    "title": "Update a mailtemplate",
    "group": "Mailtemplates",
    "description": "<p>Update a mailtemplate</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.name",
            "description": "<p>Name of mailtemplate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.subject",
            "description": "<p>Subject of mailtemplate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.content",
            "description": "<p>Content of mailtemplate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mailtemplate.signature",
            "description": "<p>Mail signature</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/mailtemplate_controller.ex",
    "groupTitle": "Mailtemplates",
    "name": "PutApiMailtemplatesId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/programmes/:id",
    "title": "Delete a programme",
    "group": "Programmes",
    "description": "<p>Completely remove a programme</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of programme</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/programme_controller.ex",
    "groupTitle": "Programmes",
    "name": "DeleteApiProgrammesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/programmes",
    "title": "Get all programmes",
    "group": "Programmes",
    "description": "<p>Fetch all available programmes</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/programme_controller.ex",
    "groupTitle": "Programmes",
    "name": "GetApiProgrammes",
    "error": {
      "examples": [
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
    "url": "/api/programmes/:id",
    "title": "Get a programme",
    "group": "Programmes",
    "description": "<p>Fetch a single programme</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the programme</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/programme_controller.ex",
    "groupTitle": "Programmes",
    "name": "GetApiProgrammesId",
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
    "type": "POST",
    "url": "/api/programmes",
    "title": "Create a programme",
    "group": "Programmes",
    "description": "<p>Create a programme</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "programme.code",
            "description": "<p>Code of programme (C, D etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "programme.name",
            "description": "<p>Name of programme</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"code\": \"D\",\n    \"name\": \"D-Guild\",\n    \"id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/programme_controller.ex",
    "groupTitle": "Programmes",
    "name": "PostApiProgrammes",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/programmes/:id",
    "title": "Update a programme",
    "group": "Programmes",
    "description": "<p>Update a programme</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "programme.code",
            "description": "<p>Code of programme (C, D etc)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "programme.name",
            "description": "<p>Name of programme</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/programme_controller.ex",
    "groupTitle": "Programmes",
    "name": "PutApiProgrammesId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/representatives/:id",
    "title": "Delete a representative",
    "group": "Representatives",
    "description": "<p>Completely remove a representative</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the representative</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/representative_controller.ex",
    "groupTitle": "Representatives",
    "name": "DeleteApiRepresentativesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/representatives",
    "title": "Get all representatives",
    "group": "Representatives",
    "description": "<p>Fetch all available representatives</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/representative_controller.ex",
    "groupTitle": "Representatives",
    "name": "GetApiRepresentatives",
    "error": {
      "examples": [
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
    "url": "/api/representatives/:id",
    "title": "Get a representative",
    "group": "Representatives",
    "description": "<p>Fetch a single representative</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the representative</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/representative_controller.ex",
    "groupTitle": "Representatives",
    "name": "GetApiRepresentativesId",
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
    "type": "POST",
    "url": "/api/representatives",
    "title": "Create a representative",
    "group": "Representatives",
    "description": "<p>Create a representative</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"user_id\": 3,\n    \"id\": 6,\n    \"company_id\": 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/representative_controller.ex",
    "groupTitle": "Representatives",
    "name": "PostApiRepresentatives",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/representatives/:id",
    "title": "Update a representative",
    "group": "Representatives",
    "description": "<p>Update a representative</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of representative</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "representative",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "representative.user_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "representative.company_id",
            "description": "<p>Company id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/representative_controller.ex",
    "groupTitle": "Representatives",
    "name": "PutApiRepresentativesId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/role/:id",
    "title": "Delete role",
    "group": "Roles",
    "description": "<p>Completely remove role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/role_controller.ex",
    "groupTitle": "Roles",
    "name": "DeleteApiRoleId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/api/students/:id",
    "title": "Delete a student",
    "group": "Roles",
    "description": "<p>Completely remove a student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the student</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Roles",
    "name": "DeleteApiStudentsId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/roles",
    "title": "Get all roles",
    "group": "Roles",
    "description": "<p>Fetch all available roles</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [\n    {\n        \"type\": \"admin\",\n        \"permissions\": [\n            \"read_all\",\n            \"write_all\"\n        ],\n        \"id\": 1\n    },\n    {\n        \"type\": \"company\",\n        \"permissions\": [\n            \"read_company\",\n            \"write_company\"\n        ],\n        \"id\": 2\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/role_controller.ex",
    "groupTitle": "Roles",
    "name": "GetApiRoles",
    "error": {
      "examples": [
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
    "url": "/api/roles/:id",
    "title": "Get a role",
    "group": "Roles",
    "description": "<p>Fetch a single role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": {\n    \"users\": [],\n    \"type\": \"company\",\n    \"permissions\": [\n        \"read_company\",\n        \"write_company\"\n    ],\n    \"id\": 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/role_controller.ex",
    "groupTitle": "Roles",
    "name": "GetApiRolesId",
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
    "type": "POST",
    "url": "/api/roles",
    "title": "Create role",
    "group": "Roles",
    "description": "<p>Create a role</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "role",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role.type",
            "description": "<p>Role (admin, student)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "role.permissions",
            "description": "<p>Permissions for role</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"type\": \"student\",\n    \"permissions\": [],\n    \"id\": 4\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/role_controller.ex",
    "groupTitle": "Roles",
    "name": "PostApiRoles",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/roles/:id",
    "title": "Update role",
    "group": "Roles",
    "description": "<p>Update role type and permissions</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "role",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role.type",
            "description": "<p>Role (admin, student)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "role.permissions",
            "description": "<p>Permissions for role</p>"
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
    "filename": "web/controllers/role_controller.ex",
    "groupTitle": "Roles",
    "name": "PutApiRolesId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
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
      ],
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
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/initial_signup/:signup_key",
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
    "name": "GetApiInitial_signupSignup_key",
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
    "url": "/api/final_signup/:signup_key",
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
    "name": "PostApiFinal_signupSignup_key",
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
    "url": "/api/initial_signup",
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
    "name": "PostApiInitial_signup",
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
    "url": "/api/statistics",
    "title": "Get all statistics",
    "group": "Statistics",
    "description": "<p>Fetch all available statistics</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": {\n    \"words_per_appl\": 1.2857142857142858,\n    \"nbr_students\": 3,\n    \"nbr_searching_students\": 3,\n    \"company_stats\": [\n        {\n            \"scored_applications\": 2,\n            \"nbr_applications\": 2,\n            \"name\": \"Google\",\n            \"id\": 1\n        },\n        {\n            \"scored_applications\": 2,\n            \"nbr_applications\": 2,\n            \"name\": \"Spotify\",\n            \"id\": 2\n        },\n        {\n            \"scored_applications\": 3,\n            \"nbr_applications\": 3,\n            \"name\": \"Intel\",\n            \"id\": 3\n        }\n    ],\n    \"applications_per_day\": [\n        \"2020-11-05T14:37:19.298619\",\n        \"2020-11-05T14:37:19.302892\",\n        \"2020-11-05T14:37:19.314837\",\n        \"2020-11-05T14:37:19.306844\",\n        \"2020-11-05T14:37:19.290003\",\n        \"2020-11-05T14:37:19.293738\",\n        \"2020-11-05T14:37:19.310778\"\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/statistics_controller.ex",
    "groupTitle": "Statistics",
    "name": "GetApiStatistics"
  },
  {
    "type": "GET",
    "url": "/api/me/student/cv/:lang",
    "title": "Get student CV",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>The language you want the CV in (either &quot;sv&quot; or &quot;en&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok\nimage",
          "type": "image/png"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Student",
    "name": "GetApiMeStudentCvLang",
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
    "type": "PUT",
    "url": "/api/me/student",
    "title": "Update info",
    "group": "Student",
    "description": "<p>Update student info</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "student",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student.year",
            "description": "<p>Optional, Enrollment year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.master",
            "description": "<p>Optional, Programme (C, D, E etc.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.linked_in",
            "description": "<p>Optional, LinkedIn link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.resume_en_url",
            "description": "<p>Optional, Resume in english link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.resume_sv_url",
            "description": "<p>Optional, Resume in swedish link</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Student",
    "name": "PutApiMeStudent",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/me/student",
    "title": "Update info",
    "group": "Student",
    "description": "<p>Update your own info as student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "student",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student.year",
            "description": "<p>Optional, Enrollment year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.master",
            "description": "<p>Optional, Programme (C, D, E etc.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.linked_in",
            "description": "<p>Optional, LinkedIn link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.resume_en_url",
            "description": "<p>Optional, Resume in english link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.resume_sv_url",
            "description": "<p>Optional, Resume in swedish link</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Student",
    "name": "PutApiMeStudent",
    "error": {
      "examples": [
        {
          "title": "Bad Request",
          "content": "HTTP 400 Bad Request",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/me/student_session_applications/:id",
    "title": "Update an application",
    "group": "Student",
    "description": "<p>Update an applictaion as student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "student_session_application",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student_session_application.motivation",
            "description": "<p>Optional, Motivation for application</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "student_session_application.company_approved",
            "description": "<p>Optional, If applictation is approved by company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session_application.score",
            "description": "<p>Optional, Score of application, judged by company?</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session_application.company_id",
            "description": "<p>Optional, Id of company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session_application.student_id",
            "description": "<p>Optional, Id of student</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_application_controller.ex",
    "groupTitle": "Student",
    "name": "PutApiMeStudent_session_applicationsId",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/student_sessions",
    "title": "Delete student sessions and display companies",
    "group": "Student_sessions",
    "description": "<p>Delete student sessions and display companies</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "DeleteApiStudent_sessions",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/student_sessions/:id",
    "title": "Delete a student session",
    "group": "Student_sessions",
    "description": "<p>Completely remove a student session</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of student session</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 204 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "DeleteApiStudent_sessionsId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "Not Found",
          "content": "HTTP 404 Not Found",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/student_session_info",
    "title": "List all accepted student sessions",
    "group": "Student_sessions",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok\ncompany_name,session_day,session_start,session_end,session_location,student_name,student_email,student_phone_number\nGoogle,1,08:00,08:15,Albatraoz,Alfa Student,student1@test.com,0708334455",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "GetApiStudent_session_info",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
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
    "url": "/api/student_session_reserves",
    "title": "List all reserves for all student sessions",
    "group": "Student_sessions",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP 200 Ok",
          "type": "String"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "GetApiStudent_session_reserves",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
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
    "type": "PATCH",
    "url": "/api/student_sessions",
    "title": "Create student sessions and send mails",
    "group": "Student_sessions",
    "description": "<p>Create student sessions and send mails</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "PatchApiStudent_sessions",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "POST",
    "url": "/api/student_sessions",
    "title": "Create a student session",
    "group": "Student_sessions",
    "description": "<p>Create a student session</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "student_session",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.student_session_status",
            "description": "<p>Optional, States- 0: not confirmed, 1: confirmed, 2: declined)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.company_id",
            "description": "<p>Id of company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.student_id",
            "description": "<p>Id of student</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.student_session_time_slot_id",
            "description": "<p>Id of student_session_time_slot</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n      \"student_session_status\": 2,\n      \"student_id\": 1,\n      \"id\": 1,\n      \"company_id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "PostApiStudent_sessions",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
    }
  },
  {
    "type": "PUT",
    "url": "/api/me/student_sessions/:id",
    "title": "Update student session",
    "group": "Student_sessions",
    "description": "<p>Update a student session</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The session id</p>"
          },
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "student_session",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.student_session_status",
            "description": "<p>States- 0: not confirmed, 1: confirmed, 2: declined)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.company_id",
            "description": "<p>Id of company</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.student_id",
            "description": "<p>Id of student</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student_session.student_session_time_slot_id",
            "description": "<p>Id of student_session_time_slot</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": {\n      \"student_session_status\": 2,\n      \"student_id\": 1,\n      \"id\": 1,\n      \"company_id\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_session_controller.ex",
    "groupTitle": "Student_sessions",
    "name": "PutApiMeStudent_sessionsId",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
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
      ],
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
      }
    }
  },
  {
    "type": "GET",
    "url": "/api/students",
    "title": "Get all students",
    "group": "Students",
    "description": "<p>Fetch all available Students</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Students",
    "name": "GetApiStudents",
    "error": {
      "examples": [
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
    "url": "/api/students/:id",
    "title": "Get a student",
    "group": "Students",
    "description": "<p>Fetch a single student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the student</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Students",
    "name": "GetApiStudentsId",
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
    "type": "POST",
    "url": "/api/students",
    "title": "Create a student",
    "group": "Students",
    "description": "<p>Create a student</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "student",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "student.year",
            "description": "<p>Optional, Enrollment year</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.master",
            "description": "<p>Optional, Programme (C, D, E etc.)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "student.linked_in",
            "description": "<p>Optional, LinkedIn link</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "student.interests",
            "description": "<p>Optional, Student interests</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 201 Created\n{\n  \"data\": {\n    \"year\": 3,\n    \"user_id\": 10,\n    \"resume_sv_url\": null,\n    \"resume_en_url\": null,\n    \"master\": \"D\",\n    \"linked_in\": \"No\",\n    \"interests\": [],\n    \"id\": 6\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/student_controller.ex",
    "groupTitle": "Students",
    "name": "PostApiStudents",
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
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        }
      ],
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
      }
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
    "type": "GET",
    "url": "/api/users",
    "title": "Get all users",
    "group": "User",
    "description": "<p>Fetch all users as admin</p>",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": [\n    {\n      \"student\": {\n        \"year\": null,\n        \"user_id\": 4,\n        \"student_sessions\": [],\n        \"student_session_applications\": [\n          {\n            \"student_id\": 3,\n            \"score\": 2,\n            \"motivation\": \"\",\n            \"id\": 7,\n            \"company_id\": 1\n          },\n          {\n            \"student_id\": 3,\n            \"score\": 3,\n            \"motivation\": \"\",\n            \"id\": 8,\n            \"company_id\": 2\n          },\n          {\n            \"student_id\": 3,\n            \"score\": 4,\n            \"motivation\": \"\",\n            \"id\": 9,\n            \"company_id\": 3\n          }\n        ],\n        \"resume_sv_url\": null,\n        \"resume_en_url\": null,\n        \"programme\": null,\n        \"master\": null,\n        \"linked_in\": null,\n        \"interests\": [],\n        \"id\": 3,\n        \"event_tickets\": []\n      },\n      \"roles\": [],\n      \"representative\": null,\n      \"profile_image\": null,\n      \"phone_number\": \"0708334455\",\n      \"last_name\": \"Student\",\n      \"id\": 4,\n      \"food_preferences\": \"\",\n      \"first_name\": \"Charlie\",\n      \"email\": \"student3@test.com\"\n    },\n    {\n      \"student\": null,\n      \"roles\": [],\n      \"representative\": {\n        \"user_id\": 5,\n        \"id\": 1,\n        \"company_id\": 1,\n        \"company\": {\n          \"website\": \"www.google.com\",\n          \"top_students\": [],\n          \"student_session_days\": 1,\n          \"name\": \"Google\",\n          \"logo_url\": null,\n          \"id\": 1,\n          \"host_phone_number\": null,\n          \"host_name\": null,\n          \"host_mail\": null,\n          \"description\": \"We code!\"\n        }\n      },\n      \"profile_image\": null,\n      \"phone_number\": \"555123456\",\n      \"last_name\": \"Company\",\n      \"id\": 5,\n      \"food_preferences\": \"\",\n      \"first_name\": \"Alfa\",\n      \"email\": \"company1@test.com\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "User",
    "name": "GetApiUsers",
    "error": {
      "examples": [
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
    "url": "/api/users/:id",
    "title": "Get a single user",
    "group": "User",
    "description": "<p>Fetch a single user as admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP 200 OK\n{\n  \"data\": {\n    \"student\": null,\n    \"roles\": [],\n    \"representative\": {\n      \"user_id\": 7,\n      \"id\": 3,\n      \"company_id\": 3,\n      \"company\": {\n        \"website\": \"www.intel.com\",\n        \"top_students\": [],\n        \"student_session_days\": 3,\n        \"name\": \"Intel\",\n        \"logo_url\": null,\n        \"id\": 3,\n        \"host_phone_number\": null,\n        \"host_name\": null,\n        \"host_mail\": null,\n        \"description\": \"We do stuff!\"\n      }\n    },\n    \"profile_image\": null,\n    \"phone_number\": \"555123456\",\n    \"last_name\": \"Company\",\n    \"id\": 7,\n    \"food_preferences\": \"\",\n    \"first_name\": \"Charlie\",\n    \"email\": \"company3@test.com\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/controllers/user_controller.ex",
    "groupTitle": "User",
    "name": "GetApiUsersId",
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
  },
  {
    "type": "PUT",
    "url": "api/users",
    "title": "Update company website and description",
    "group": "User",
    "description": "<p>As a representative, update company website and description</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "company",
            "description": "<p>Nested JSON object containing below fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.description",
            "description": "<p>Description of company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company.website",
            "description": "<p>Company URL</p>"
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
    "name": "PutApiUsers",
    "error": {
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP 422 Unprocessable Entity\n{\n  \"errors\": {\n    \"title\": [\n      \"can't be blank\"\n    ]\n  }\n}",
          "type": "json"
        },
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
      ],
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
      }
    }
  }
] });
