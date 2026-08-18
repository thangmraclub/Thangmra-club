let accessToken = null;


// ======================
// ADMIN LOGIN
// ======================

async function login() {

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const message =
    document.getElementById("loginMessage");

  message.innerText = "Login হচ্ছে...";

  try {

    const response = await fetch(
      `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY
        },

        body: JSON.stringify({
          email: email,
          password: password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {

      throw new Error(
        data.error_description ||
        "Login ব্যর্থ হয়েছে"
      );

    }

    accessToken = data.access_token;

    document.getElementById("loginBox")
      .style.display = "none";

    document.getElementById("adminPanel")
      .style.display = "block";

    loadAdminGallery();

  } catch (error) {

    message.innerText = error.message;

  }

}



// ======================
// IMAGE UPLOAD
// ======================

async function uploadImage() {

  const file =
    document.getElementById("photo").files[0];

  const caption =
    document.getElementById("caption").value;

  const message =
    document.getElementById("message");


  if (!file) {

    message.innerText =
      "আগে একটি ছবি নির্বাচন করুন।";

    return;

  }


  message.innerText =
    "ছবি আপলোড হচ্ছে...";


  try {

    const fileName =
      Date.now() + "_" + file.name;


    // Storage-এ ছবি আপলোড

    const uploadResponse = await fetch(

      `${SUPABASE_URL}/storage/v1/object/${SUPABASE_BUCKET}/${fileName}`,

      {

        method: "POST",

        headers: {

          "Authorization":
            `Bearer ${accessToken}`,

          "apikey":
            SUPABASE_ANON_KEY,

          "Content-Type":
            file.type

        },

        body: file

      }

    );


    if (!uploadResponse.ok) {

      throw new Error(
        "ছবি Storage-এ আপলোড হয়নি।"
      );

    }


    // ছবির Public URL

    const imageURL =
      `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/${fileName}`;


    // Database-এ তথ্য সংরক্ষণ

    const databaseResponse =
      await fetch(

        `${SUPABASE_URL}/rest/v1/gallery`,

        {

          method: "POST",

          headers: {

            "Authorization":
              `Bearer ${accessToken}`,

            "apikey":
              SUPABASE_ANON_KEY,

            "Content-Type":
              "application/json",

            "Prefer":
              "return=minimal"

          },

          body: JSON.stringify({

            caption: caption,

            image_url: imageURL,

            storage_path: fileName

          })

        }

      );


    if (!databaseResponse.ok) {

      throw new Error(
        "Database-এ তথ্য সংরক্ষণ হয়নি।"
      );

    }


    message.innerText =
      "✅ ছবি সফলভাবে আপলোড হয়েছে।";


    document.getElementById("photo").value = "";

    document.getElementById("caption").value = "";


    loadAdminGallery();


  } catch (error) {

    message.innerText =
      "❌ " + error.message;

  }

}



// ======================
// ADMIN GALLERY
// ======================

async function loadAdminGallery() {

  const gallery =
    document.getElementById("adminGallery");


  const response = await fetch(

    `${SUPABASE_URL}/rest/v1/gallery?select=*&order=id.desc`,

    {

      headers: {

        "apikey":
          SUPABASE_ANON_KEY,

        "Authorization":
          `Bearer ${accessToken}`

      }

    }

  );


  const data =
    await response.json();


  gallery.innerHTML = "";


  data.forEach(item => {

    gallery.innerHTML += `

      <div class="gallery-card">

        <img
          src="${item.image_url}"
        >

        <div class="caption">

          ${item.caption || ""}

        </div>

      </div>

    `;

  });

}
