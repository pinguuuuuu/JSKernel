import System from './System/System.js'; // DO NOT TOUCH




const main = async () => {
    System.Screen.write(0, 16, "blue", "Loadind files ...");
    await System.Clock.sleep(1000);
    System.Screen.clear();
    System.Screen.write(0, 16, "white", "[==========>         ]");
    await System.Clock.sleep(1000);
    System.Screen.clear();
    System.Screen.write(0, 16, "white", "[===================>]");
    await System.Clock.sleep(1000);
    System.Screen.clear();
    System.Screen.write(0, 16, "green", "Welcome to Your OS!");
    System.Screen.write(0, 32, "white", "Developed by Your Name.");
};



const your_os = new System.OS("Your OS name", main, "Your name"); // Init your OS
your_os.boot(); // Boot your OS