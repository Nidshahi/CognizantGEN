// BankAccount
public class BankAccount {
    private int balance;

    public BankAccount(int initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(int amount) {
        balance += amount;
    }

    public void withdraw(int amount) {
        balance -= amount;
    }

    public int getBalance() {
        return balance;
    }
}

// BankAccountTest
import static org.junit.Assert.*;
import org.junit.*;

public class BankAccountTest {
    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount(100);
        System.out.println("Setup completed");
    }

    @After
    public void tearDown() {
        account = null;
        System.out.println("Teardown completed");
    }

    @Test
    public void testDeposit() {
        // Arrange is done in setUp
        // Act
        account.deposit(50);
        // Assert
        assertEquals(150, account.getBalance());
    }

    @Test
    public void testWithdraw() {
        account.withdraw(30);
        assertEquals(70, account.getBalance());
    }
}
