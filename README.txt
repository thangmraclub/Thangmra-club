THANGMRA CLUB REAL ONLINE ADMIN

এটি সত্যিকারের অনলাইন Admin System-এর template।
Admin থেকে তথ্য বদলালে Firebase Realtime Database-এর মাধ্যমে ওয়েবসাইটে সবার জন্য পরিবর্তন দেখা যাবে।

যা করতে হবে:
1. Firebase Console-এ একটি project তৈরি করুন।
2. Realtime Database চালু করুন।
3. Authentication > Email/Password চালু করুন।
4. একজন Admin user তৈরি করুন।
5. Firebase-এর Web App config কপি করে index.html ও admin.html-এর firebaseConfig অংশে বসান।
6. Database Rules নিরাপদ রাখুন—শুধু authenticated admin-কে write permission দিন।
7. সব HTML ফাইল GitHub-এ আপলোড করুন।

এই template-এ login ছাড়া কেউ Admin Panel-এর data পরিবর্তন করতে পারবে না।
