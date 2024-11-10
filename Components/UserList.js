import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { get_user_list } from './redux/action';

function UserList() {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.users);
  useEffect(() => {
    dispatch(get_user_list());
  }, [dispatch]);

  return (
    <ScrollView style={styles.headerContainer}>
      {userList.length > 0 ? (
        userList.map((user) => (
          <View key={user.id} style={styles.userContainer}>
            <Text style={styles.userName}>Name: {user.name}</Text>
            <Text style={styles.userEmail}>Email: {user.email}</Text>
            <Text style={styles.userCompany}>Company: {user.company?.name}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>No users available</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  userContainer: {
    padding: 8,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  userCompany: {
    fontSize: 14,
    color: '#777',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default UserList;
