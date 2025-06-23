public class EcommerceSearch {

    static class Product {
        int productId;
        String productName;
        String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String toString() {
            return "[" + productId + "] " + productName + " - " + category;
        }
    }

    public static Product linearSearch(Product[] products, String targetName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(targetName)) {
                return p;
            }
        }
        return null;
    }

    public static void sortProductsByName(Product[] products) {
        for (int i = 0; i < products.length - 1; i++) {
            for (int j = 0; j < products.length - i - 1; j++) {
                if (products[j].productName.compareToIgnoreCase(products[j + 1].productName) > 0) {
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
    }

    public static Product binarySearch(Product[] products, String targetName) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int result = products[mid].productName.compareToIgnoreCase(targetName);

            if (result == 0) return products[mid];
            else if (result < 0) low = mid + 1;
            else high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {
        Product[] productList = {
            new Product(101, "Mobile", "Electronics"),
            new Product(102, "Shirt", "Clothing"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Laptop", "Electronics"),
            new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search output for input Shoes:");
        Product foundLinear = linearSearch(productList, "Shoes");
        if (foundLinear != null) {
            System.out.println("Found: " + foundLinear);
        } else {
            System.out.println("not found.");
        }

        sortProductsByName(productList);

        System.out.println("\nBinary Search output for input Laptop:");
        Product foundBinary = binarySearch(productList, "Laptop");
        if (foundBinary != null) {
            System.out.println("Found: " + foundBinary);
        } else {
            System.out.println("not found.");
        }
    }
}
