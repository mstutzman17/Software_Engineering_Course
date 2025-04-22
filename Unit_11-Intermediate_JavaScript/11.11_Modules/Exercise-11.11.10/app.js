// Loading Light or Dark Theme
async function loadConfig(){
    const {setLightTheme, setDarkTheme} = await import('./theme.mjs')
    
    const hour = new Date().getHours();

    if (hour < 18){
        setLightTheme();
    }else {
        setDarkTheme();
    }
}

loadConfig();