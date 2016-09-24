# jsListMakerModule
This a list maker made using a revealing js pattern. It is created to be reused anywhere a developer needs to allow the user to create a list.

## Getting Started (using module loader)

1.Add file 'src/js/modile/toList.module.js' and 'src/js/modile/pubsub.js' to project.

2.Add css file to style module. (default styling can be found in src/css/style.css)

3.Load modules into project.

4.Include html in body where you want list to appear.

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


##Getting started (no module loader)
1. Include jquery.js and moustache.js in your project.

2. Inlude src/js/toListNoModuleLoader.js to your project.

3.Include html in body where you want list to appear.

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

###Example installation (toListNoModuleLoader.js)
        
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
                
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.1/mustache.min.js"></script>
                <script src="toListNoModuleLoader.js"></script>
                </body>
        </html>

##Api

.subscribe(functionName); --> Allows other modules to listen for changes in the list data

.unsubscribe(functionName); --> Unsubscribe module from listening for changes in the list data. (Must be same function name as used in subscribe)

.addToList(item); --> Manuelly add string data to the list.

.deleteFromList(index); -> manuelly remove index of index from the list. (takes a number starting at 0)

.returnList(); --> returns the data in the list in an array.

## Dependencies

* jQuery
* MustacheJs

## Authors

* **Niall O Connor** - [nialloc9](https://github.com/nialloc9/jsListMakerModule)
