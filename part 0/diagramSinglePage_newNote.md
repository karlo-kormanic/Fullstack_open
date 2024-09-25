```mermaid
  sequenceDiagram
    participant browser
    participant server

    Note right of browser: We input the wanted note in the browser text box and press "Save".
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTML document
    deactivate server

    Note left of server: The server responds with the code 201: created.
```