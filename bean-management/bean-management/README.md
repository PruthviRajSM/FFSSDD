# Spring Bean Configuration and Management Demo

## Project Structure
```
bean-management/
├── pom.xml
└── src/
    └── main/
        └── java/
            └── com/
                └── example/
                    └── lab5/
                        ├── AppConfig.java
                        ├── BeanInjection.java
                        ├── DependentBean.java
                        └── MyBean.java
```

## Problem Statement
Construct a bean configuration and management program for defining and managing beans, including their lifecycle, scopes, and dependencies.

## What This Project Demonstrates

### 1. Bean Configuration
- **@Configuration**: `AppConfig` class marks the configuration
- **@Bean**: Explicitly creates and configures `MyBean`
- **@ComponentScan**: Automatically discovers `@Component` classes

### 2. Bean Lifecycle
- **Constructor**: Called when bean is created
- **initMethod**: Called after properties are set (initialization logic)
- **destroyMethod**: Called when context is closed (cleanup logic)

### 3. Bean Scope
- **@Scope("singleton")**: Only one instance of MyBean exists (default)
- Other scopes: prototype, request, session, application

### 4. Dependency Injection
- **Constructor Injection**: `DependentBean` receives `MyBean` via constructor
- Spring automatically wires dependencies

## How to Run in VS Code

### Step 1: Extract and Open
1. Extract the `bean-management.zip` file
2. Open VS Code
3. File → Open Folder → Select `bean-management` folder

### Step 2: Download Dependencies
In the terminal (View → Terminal):
```bash
mvn clean install
```

### Step 3: Run the Application

**Method 1: Using Run button**
1. Open `BeanInjection.java`
2. Click the **Run** button above `public static void main`

**Method 2: Using Maven**
```bash
mvn exec:java "-Dexec.mainClass=com.example.lab5.BeanInjection"
```

## Expected Output
```
MyBean: Constructor called
MyBean: Initialization logic
MyBean: Working...
DependentBean: Using MyBean to perform task.
MyBean: Working...
MyBean: Destruction logic
```

## Understanding the Output

1. **Constructor called** - Bean is instantiated
2. **Initialization logic** - Init method is called (after construction)
3. **Working...** (first time) - Called directly via myBean.doWork()
4. **DependentBean: Using MyBean...** - DependentBean uses injected MyBean
5. **Working...** (second time) - Called via DependentBean
6. **Destruction logic** - Destroy method is called when context closes

## Key Concepts Explained

### Bean Lifecycle Methods
```java
@Bean(initMethod = "init", destroyMethod = "destroy")
```
- **initMethod**: Runs custom initialization code after bean creation
- **destroyMethod**: Runs cleanup code before application shutdown

### Singleton Scope
```java
@Scope("singleton")
```
- Only ONE instance of the bean exists in the Spring container
- Same instance is injected everywhere it's needed
- This is the default scope

### Dependency Injection
```java
public DependentBean(MyBean myBean) {
    this.myBean = myBean;
}
```
- Spring automatically provides MyBean when creating DependentBean
- Constructor injection ensures dependencies are always available

## Requirements
- Java 21 or higher
- Maven 3.x or higher
- VS Code with Java Extension Pack
