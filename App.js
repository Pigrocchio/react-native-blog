import React from "react";

import {Provider} from './src/context/BlogContext'
import MainNavigation from "./src/navigation/MainNavigation"

export default function App() {
    return (
      <Provider>
        <MainNavigation />
      </Provider>
    );
}


