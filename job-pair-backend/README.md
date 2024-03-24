**Jobpair Database Seeding Script**

This script manages the seeding of a Firestore database for the jobpair platform. It includes functions to add jobs, seekers, recruiters, and admins to the database. Additionally, it provides methods to delete seekers and applied jobs, delete recruiters and their chat sub-collection, and delete all documents from the jobs and admins collections. The script interacts with the Firebase Admin SDK to perform database operations.

**Instructions:**

1. Install the required dependencies by running:

   ```bash
   pip install firebase-admin
   ```

2. Place the `jobpair-305bf-firebase-adminsdk-z1lyx-2330215fb7.json` service account key file in the same directory as this script.

3. Ensure that the `dummy_data.py` file containing the dummy data is present in the same directory.

4. Run the script using Python:

   ```bash
   python database_seeding.py
   ```

   This will seed the Firestore database with jobs, seekers, recruiters, and admins, as well as delete existing data as specified in the script.

**Note:** Gave view acces to the Firebase DB to both TA's Syed and Sajed.
