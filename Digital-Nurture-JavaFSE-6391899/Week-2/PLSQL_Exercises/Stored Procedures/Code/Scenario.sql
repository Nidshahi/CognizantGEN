-- Scenario 1: Process Monthly Interest for All Savings Accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc IN (
    SELECT AccountID, Balance
    FROM Accounts
    WHERE AccountType = 'Savings'
  ) LOOP
    UPDATE Accounts
    SET Balance = acc.Balance + (acc.Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

-- Scenario 2: Update Employee Bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  p_department IN VARCHAR2,
  p_bonus_pct IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_bonus_pct / 100)
  WHERE Department = p_department;
  DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || p_department);
END;
/

-- Scenario 3: Transfer Funds Between Accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
  p_from_acct IN NUMBER,
  p_to_acct IN NUMBER,
  p_amount IN NUMBER
) AS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_acct;
  
  IF v_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
  END IF;

  UPDATE Accounts SET Balance = Balance - p_amount WHERE AccountID = p_from_acct;
  UPDATE Accounts SET Balance = Balance + p_amount WHERE AccountID = p_to_acct;

  INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
  VALUES (transactions_seq.NEXTVAL, p_from_acct, SYSDATE, p_amount, 'Withdrawal');

  INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
  VALUES (transactions_seq.NEXTVAL, p_to_acct, SYSDATE, p_amount, 'Deposit');

  DBMS_OUTPUT.PUT_LINE('Transfer successful.');
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error during transfer: ' || SQLERRM);
    ROLLBACK;
END;
/
