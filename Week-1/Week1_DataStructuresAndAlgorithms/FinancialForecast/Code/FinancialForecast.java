public class FinancialForecast {

    // Recursive method
    public static double futureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return (1 + growthRate) * futureValue(initialValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialValue = 10000;  
        double growthRate = 0.05; 
        int years = 5;             

        double result = futureValue(initialValue, growthRate, years);

        System.out.printf("Future value after %d years = %.2f%n", years, result);
    }
}
