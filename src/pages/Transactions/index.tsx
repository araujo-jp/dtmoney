import { useContext } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionContext } from '../../contexts/TransactionsContext';
import { dateformatter, priceFormatter } from '../../utils/formatted';
import { SearchForm } from './components/SearchForm';
import { PriceHighlight, TransactionsConnntainer, TransactionsTable } from './styles';

export function Transactions() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsConnntainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- ' }
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateformatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsConnntainer>
    </div >
  )
}
