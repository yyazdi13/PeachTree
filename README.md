# PeachTree
This is a MEAN banking app built for an assignment, focusing on Angular and pure CSS. Users can transfer money, view a list of transactions, sort the list, and conduct a search filter. The power of Angular allows the UI to be broken up into functional components so that the flow of client data can be optimized.

This full-stack application is fully responsive, and makes use of a RESTful API to create and read data from the database. To demonstrate my front-end skills, no styling frameworks were used.

![image](https://user-images.githubusercontent.com/54565666/95813228-09ffd900-0cdd-11eb-9264-d7689828c420.png)


### Transfer Money

As a user, I should be able to transfer money from my account and view the changes to my transaction history

---

As a user I should be able to:

1. Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form. 
    - The "FROM ACCOUNT" field is pre-filled with the data and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. 
    - When the transfer is pressed the new transfer should appear at the top of the transactions list, and the balance in the "FROM ACCOUNT" field should have decreased by the amount of the transfer.

Additional feautures:

- Reset the form to its initial state after the transfer has been completed successfully.
- A user shouldn't be able to overdraft their account beyond a balance of $ -500.00.

### Transaction History

As a user, I should be able to view recent transactions in an ordered list.

As a user, I should be able to search my recent transactions by typing a keyword in the search field.

As a user, I should be able to sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

---

As a user I should be able to:

1. View a list of my recent transactions.
2. See the transactions list updated with the new transaction when a new money transfer has taken place.
3. Filter the transactions list by typing a keyword in the Search field.
    - The transactions list should update immediately at every keystroke.
4. Clear the filter by clicking an 'x' icon in the Search field.
4. Sort the transactions list by Date, Beneficiary and Amount.

## Development
Run 'npm run dev' for a dev server. IMPORTANT: Under client in the transfer-box-service.service.ts and the recent-transacitons-servide.service.ts files, please change the api calls to add this in front of them: http://localhost:3001
