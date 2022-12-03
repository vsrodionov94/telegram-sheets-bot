export interface OperatingTransaction {
  addNewTransaction(): void;
  removeTransactionById(id: string): void;
  removeAllTransactions(): void;
}
