async function loadGallery() {

  const gallery = document.getElementById("gallery");

  try {

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/gallery?select=*&order=id.desc`,
      {
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
        }
      }
    );

    const data = await response.json();

    if (data.length === 0) {
      gallery.innerHTML = "<p>এখনও কোনো ছবি যোগ করা হয়নি।</p>";
      return;
    }

    gallery.innerHTML = "";

    data.forEach(item => {

      const card = document.createElement("div");

      card.className = "gallery-card";

      card.innerHTML = `
        <img src="${item.image_url}" alt="Gallery Image">
        <div class="caption">
          ${item.caption || ""}
        </div>
      `;

      gallery.appendChild(card);

    });

  } catch (error) {

    console.log(error);

    gallery.innerHTML =
      "<p>ছবি লোড করতে সমস্যা হয়েছে।</p>";
  }
}

loadGallery();
