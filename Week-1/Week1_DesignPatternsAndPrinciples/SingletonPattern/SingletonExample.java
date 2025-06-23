public class SingletonExample {

    // Singleton Logger class
    static class Logger {
        private static Logger instance;

        // Private constructor to prevent instantiation
        private Logger() {
            System.out.println("Logger instance created.");
        }

        // Public method to return the same instance every time
        public static Logger getInstance() {
            if (instance == null) {
                instance = new Logger();
            }
            return instance;
        }

        public void log(String message) {
            System.out.println("Log: " + message);
        }
    }

    // Test class inside main
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");

        // Check if both instances are the same
        if (logger1 == logger2) {
            System.out.println("Both loggers are the same instance.");
        } else {
            System.out.println("Different instances exist.");
        }
    }
}
