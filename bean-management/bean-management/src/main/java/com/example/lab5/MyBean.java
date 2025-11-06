package com.example.lab5;

public class MyBean {
    
    public MyBean() {
        System.out.println("MyBean: Constructor called");
    }
    
    public void init() {
        System.out.println("MyBean: Initialization logic");
    }
    
    public void destroy() {
        System.out.println("MyBean: Destruction logic");
    }
    
    public void doWork() {
        System.out.println("MyBean: Working...");
    }
}
