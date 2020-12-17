# pecan-ai-interview
 pecan.ai job interview assigment

 REST API Documentation

    // GET all connections
        GET https://api.pecan.ai/connections?skip=0&limit=2

        // Responce (JSON)
        {
            "connections": [
                {
                    "id": "conId1",
                    "name": "first connection"
                },
                {
                    "id": "conId2",
                    "name": "second connection"
                },
            ]
        }

    // Add connection
        POST https://api.pecan.ai/connections

        // Body Params
        {
            "name": "new connection" // string
        }

        // Responce (JSON)
        {
            "connections": [
                {
                    "id": "conId3",
                    "name": "new connection"
                }
            ]
        }

    // Delete connection
        DELETE https://api.pecan.ai/connections?connectionId=conid3

        // Responce (JSON)
        {}

    // GET all databases of connectionId
        GET https://api.pecan.ai/databases?connectionid=conid1&skip=0&limit=2

        // Responce (JSON)
        {
            "databases": [
                {
                    "id": "dbId1",
                    "name": "first database"
                },
                {
                    "id": "dbId2",
                    "name": "second database"
                },
            ]
        }

    // Add database
        POST https://api.pecan.ai/databases

        // Body Params
        {
            "name": "new database" // string
        }

        // Responce (JSON)
        {
            "databases": [
                {
                    "id": "dbId3",
                    "name": "new database"
                }
            ]
        }

    // Delete connection
        DELETE https://api.pecan.ai/databases?databaseId=dbid3

        // Responce (JSON)
        {}

    // GET all schemas of databaseId
        GET https://api.pecan.ai/schemas?databaseid=dbid1&skip=0&limit=2

        // Responce (JSON)
        {
            "schemas": [
                {
                    "id": "scId1",
                    "name": "first schema"
                },
                {
                    "id": "scId2",
                    "name": "second schema"
                },
            ]
        }

    // Add schema
        POST https://api.pecan.ai/schemas

        // Body Params
        {
            "name": "new schema" // string
        }

        // Responce (JSON)
        {
            "schemas": [
                {
                    "id": "csId3",
                    "name": "new schema"
                }
            ]
        }

    // Delete schema
        DELETE https://api.pecan.ai/schemas?schemaId=scid3

        // Responce (JSON)
        {}

    // GET all tables of schemaId
        GET https://api.pecan.ai/tables?schemaid=scid1&skip=0&limit=2

        // Responce (JSON)
        {
            "tables": [
                {
                    "id": "tbId1",
                    "name": "first table"
                },
                {
                    "id": "tbId2",
                    "name": "second table"
                },
            ]
        }

    // Add table
        POST https://api.pecan.ai/tables

        // Body Params
        {
            "name": "new table" // string
        }

        // Responce (JSON)
        {
            "tables": [
                {
                    "id": "tbId3",
                    "name": "new table"
                }
            ]
        }

    // Delete table
        DELETE https://api.pecan.ai/tables?tableId=tbid3

        // Responce (JSON)
        {}

    // GET all columns of tableId
        GET https://api.pecan.ai/columns?tableid=tbid1&skip=0&limit=2

        // Responce (JSON)
        {
            "columns": [
                {
                    "id": "clId1",
                    "name": "first column",
                    "data": {
                        "header": "first header",
                        "rows": ["first data", "second data", "third data"]
                    }
                },
                {
                    "id": "clId2",
                    "name": "second column",
                    "data": {
                        "header": "second header",
                        "rows": ["first data", "second data", "third data"]
                    }
                },
            ]
        }

    // Add column
        POST https://api.pecan.ai/columns

        // Body Params
        {
            "name": "new column" // string
        }

        // Responce (JSON)
        {
            "columns": [
                {
                    "id": "clId3",
                    "name": "new column"
                }
            ]
        }

    // Delete column
        DELETE https://api.pecan.ai/columns?columnId=clid3

        // Responce (JSON)
        {}