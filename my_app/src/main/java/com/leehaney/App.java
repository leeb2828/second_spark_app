package com.leehaney;

import java.util.HashMap;
import java.util.Map;

import static spark.Spark.*;
import spark.ModelAndView;

public class App {
    public static void main(String[] args) {
        staticFileLocation("/public");

        get("/", (req, res) -> {
            return new ModelAndView(null, "index.html");
        });

    }  
}

