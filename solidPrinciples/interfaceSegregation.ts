interface User {
}

// Bad practice: A single large interface
interface IUserRepository {
    getUserById(id: string): User;

    getUserByEmail(email: string): User;

    createUser(user: User): User;

    updateUser(user: User): User;

    deleteUser(id: string): boolean;
}


// Good practice: Separate interfaces
interface IUserReader {
    getUserById(id: string): User;

    getUserByEmail(email: string): User;
}

interface IUserWriter {
    createUser(user: User): User;

    updateUser(user: User): User;

    deleteUser(id: string): boolean;
}

//-----------------------------------------------------------------------------------------------

// Bad practice: A single large interface
interface IPayment {
    getPayment(id: string): User;

    getLoanPayment(email: string): User;

    loanRepayment(user: User): User;

    intiateLoanSettlement(user: User): User;

}

// Good practice: Separate interfaces

interface IPayment {
    getPayment(id: string): User;
}

interface ILoanPayment extends IPayment {
    getLoanPayment(email: string): User;

    loanRepayment(user: User): User;

    intiateLoanSettlement(user: User): User;


}