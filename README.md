# jsListMakerModule
This a list maker made using a revealing js pattern. It is created to be reused anywhere a developer needs to allow the user to create a list.

## Getting Started

1.Add file 'toList.min.js' to project.
2.Add css file to style module. (default styling can be found in src/css/style.css)
2.Include html in body where you want list to appear.

        <div id="addToListModule">
            <h1>List</h1>
            <input placeholder="Item 1" type="text">
            <button id="addToListBtn">Add</button>
            <ul id="list">
                <!-- add to list template html -->
                <script id="addToListTemplate" type="text/template">
                    {{#list}}
                    <li>
                        <span>{{.}}</span>
                        <i class="del">X</i>
                    </li>
                    {{/list}}
                </script>
            </ul>
        </div>

### Example installation

        <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <title>Test</title>
              <link href="style.css" type="text/css" rel="stylesheet">
          </head>
          <body>
          <div id="addToListModule">
              <h1>List</h1>
              <input placeholder="Item 1" type="text">
              <button id="addToListBtn">Add</button>
              <ul id="list">
                  <!-- add to list template html -->
                  <script id="addToListTemplate" type="text/template">
                      {{#list}}
                      <li>
                          <span>{{.}}</span>
                          <i class="del">X</i>
                      </li>
                      {{/list}}
                  </script>
              </ul>
          </div>
          
          <script src="toList.min.js"></script>
          </body>
          </html>

## Deployment

Use minified file for production sites.

## Dependencies

* jQuery
* MustacheJs
* Webpack

## Authors

* **Niall O Connor** - [nialloc9](https://github.com/nialloc9/jsListMakerModule)
