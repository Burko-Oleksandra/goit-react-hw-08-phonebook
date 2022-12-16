import { useSelector } from 'react-redux';
import { useGetContactQuery } from '../../redux/api/contactsApi';
import ContactListItem from './ContactListItem';
import Loader from 'components/Loader';
import { List } from './ContactsList.styled';

export default function ContactList() {
  const { data, isFetching } = useGetContactQuery();
  const filter = useSelector(state => state.filter);

  const contacts =
    data && data.filter(contact => contact.name.toLowerCase().includes(filter));

  return (
    <div>
      {data && data.length !== 0 && (
        <List>
          {contacts.map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
      {isFetching && <Loader />}
    </div>
  );
}
