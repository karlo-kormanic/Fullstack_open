```mermaid
  sequenceDiagram
    participant browser
    participant server

    Note right of browser: We input the wanted note in the browser text box and press send.
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server
```