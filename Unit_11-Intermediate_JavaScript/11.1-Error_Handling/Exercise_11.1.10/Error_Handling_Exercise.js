const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300},
    {id: 17, owner: "Moses", balance: 1700}
];

function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id === id)
            // changed from == to === to ensure that the type and value being compared are the same.
		{
			return account;
		}
	}
}

function createAccount (newAccountId, newAccountOwner)
{
	const account = getAccountById(newAccountId);

	if (account)
	{
		throw new Error("Account already exists."); 
        // this ensures that accounts with the same name cannot be created. If you try to create an account with a name that already exists, this error will be thrown.
	}

	if (!Number.isFinite(newAccountId) || newAccountId <= 0)
	{
		throw new Error("Invalid value for account ID: The account ID must be a positive finite integer.");
        // this ensures that the id for an account is a positive, finite integer. If not, this error message will be thorwn.
	}

	if (typeof newAccountOwner !== "string" || newAccountOwner.trim() === "")
	{
		throw new Error("Invalid account owner: The account owner must be a non-empty string.");
        // this ensures that the account owner name is a non-empty string. If the string is empty it will throw this error message.
	}

	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: 0
		}
	);
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found");
        // this ensures that money is being deposited into an existing account.
	}

	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for deposit amount: The amount must be a positive, finite number.");
        // this ensures that the amount being deposited is a positive finite number
	}

	account.balance += amount;
	return account.balance; // Return the updated balance
}


function withdrawMoney (accountId, amount) 
{
	const account = getAccountById(accountId);

	if (!account)
	{
		throw new Error("Account not found.");
        // this ensures that you are withdrawing money from an exisiting account. If the account does not exist, no money will be withdrawn and the above error will be thrown.
	}
	

	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a positive, finite number.");
        // this ensures that the amount being withdrawn is a positive finite number.
	}

	if (account.balance < amount)
	{
		throw new Error("Insufficient funds for withdrawal.");
        // this ensures that the amount being withdrawn does not exceed the available balance.
	}

	account.balance -= amount;
	return account.balance; // Return the updated balance
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount)
	{
		throw new Error("Source account not found.");
        // this ensures that you are transferring money FROM an existing account.
	}

	if (!toAccount)
	{
		throw new Error("Destination account not found.");
        // this ensures that you are transferring money INTO an existing account.
	}

	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
        // this ensures that amount being transferred is a positive finite number.
	}

	if (fromAccount.balance < amount)
	{
		throw new Error("Insufficient funds for transfer.");
        // this ensures that the transfer amount does not exceed the available balance of the account being transferred FROM.
	}

	fromAccount.balance -= amount;
	toAccount.balance += amount;
}
