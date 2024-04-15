import { openDB } from 'idb';

const DB_NAME = 'jate';
const DB_VER = 1;

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// Function to update or insert content into the database
export const putDb = async (content) => {
  // Open the database with the specified name and version
  const database = await openDB(DB_NAME, DB_VER);

  // Create a readwrite transaction to make changes to the database
  const transaction = database.transaction(DB_NAME, 'readwrite');

  // Access the object store managed by this transaction
  const store = transaction.objectStore(DB_NAME);

  // Use the put method to update the content; if the record doesn't exist, it creates a new one
  const updateResult = await store.put({ id: 1, content });

  // Ensure the transaction completes successfully
  await transaction.done;

  // Return the result of the put operation
  return updateResult;
};


// TODO: Add logic for a method that gets all the content from the database
// Function to retrieve content from the database
export const getDb = async () => {
  // Open the database with the specified name and version
  const database = await openDB(DB_NAME, DB_VER);

  // Create a readonly transaction to access the data
  const transaction = database.transaction(DB_NAME, 'readonly');

  // Access the object store for reading
  const store = transaction.objectStore(DB_NAME);

  // Retrieve all records from the store
  const allRecords = await store.getAll();

  // We expect to find at least one record, take the first one if available
  const firstRecord = allRecords[0];

  // Return the content of the first record, or undefined if no records exist
  return firstRecord ? firstRecord.content : undefined;
};


initdb();
