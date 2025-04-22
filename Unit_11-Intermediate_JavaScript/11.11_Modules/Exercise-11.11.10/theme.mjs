// 4. **Dynamic Imports:** Utilize dynamic imports for conditionally loading modules for theme management based on time.
//     - Create `theme.mjs`, which exports functions that manage the application's theme. The function `setLightTheme` and `setDarkTheme` set and log the theme being set to the console.
//     - Create `app.js`. Implement an async function, `loadConfig,` that dynamically imports the `theme.mjs` and decides which theme function to call based on the current hour (e.g., light theme before 6 PM, dark theme afterward).

export function setLightTheme(light){
    console.log("Light theme has been set.")
}

export function setDarkTheme(dark){
    console.log("Dark theme has been set.")
}