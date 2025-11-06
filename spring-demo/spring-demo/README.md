# Spring Dependency Injection Demo

## Project Structure
```
spring-demo/
├── pom.xml
└── src/
    └── main/
        └── java/
            └── com/
                └── example/
                    └── lab4/
                        ├── AppConfig.java
                        ├── DependencyInjectionApplication.java
                        ├── EmailService.java
                        ├── MessageService.java
                        ├── NotificationService.java
                        └── SMSService.java
```

## How to Run in VS Code

### Step 1: Extract the zip file
1. Extract the `spring-demo.zip` file to your desired location
2. Open VS Code
3. Click **File → Open Folder**
4. Select the `spring-demo` folder

### Step 2: Download Maven Dependencies
In the VS Code terminal (View → Terminal), run:
```bash
mvn clean install
```

Wait for Maven to download all Spring dependencies (this may take a few minutes the first time).

### Step 3: Run the Application

**Method 1: Using the Run button**
1. Open `DependencyInjectionApplication.java`
2. You'll see a **Run** button above the `public static void main` method
3. Click it

**Method 2: Using Maven**
In the terminal, run:
```bash
mvn exec:java -Dexec.mainClass="com.example.lab4.DependencyInjectionApplication"
```

### Expected Output
```
📱 SMS sent to user@example.com with message: Hello, World!
```

## Switching Between Email and SMS

To use EmailService instead of SMSService, edit `NotificationService.java`:

Change:
```java
public NotificationService(@Qualifier("smsService") MessageService messageService)
```

To:
```java
public NotificationService(@Qualifier("emailService") MessageService messageService)
```

Then the output will be:
```
📧 Email sent to user@example.com with message: Hello, World!
```

## What This Project Demonstrates

This project demonstrates **Dependency Injection** in Spring:
- **Interface**: `MessageService` defines the contract
- **Implementations**: `EmailService` and `SMSService` implement the interface
- **Dependency Injection**: Spring automatically injects the correct implementation into `NotificationService`
- **@Qualifier**: Specifies which implementation to use when multiple beans exist
- **Loose Coupling**: `NotificationService` doesn't need to know about concrete implementations

## Requirements
- Java 21 or higher
- Maven 3.x or higher
- VS Code with Java Extension Pack
