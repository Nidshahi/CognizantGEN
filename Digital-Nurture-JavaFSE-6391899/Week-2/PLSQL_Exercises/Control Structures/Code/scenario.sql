-- Scenario 1: Apply 1% Discount to Loan Interest Rates for Customers Above 60 Years Old
BEGIN
  FOR cust IN (
    SELECT l.LoanID, l.InterestRate
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE MONTHS_BETWEEN(SYSDATE, c.DOB)/12 > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = cust.InterestRate - (cust.InterestRate * 0.01)
    WHERE LoanID = cust.LoanID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('1% discount applied to all customers above 60.');
END;
/

-- Scenario 2: Set IsVIP Flag for Customers with Balance > $10,000
BEGIN
  FOR cust IN (
    SELECT CustomerID FROM Customers WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET Name = Name || ' [VIP]'
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('VIP flag set for customers with balance over $10,000.');
END;
/

-- Scenario 3: Send Reminders for Loans Due in Next 30 Days
BEGIN
  FOR loan_rec IN (
    SELECT c.Name, l.LoanID, l.EndDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: ' || loan_rec.Name || ', your loan (ID: ' || loan_rec.LoanID || ') is due on ' || TO_CHAR(loan_rec.EndDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
/