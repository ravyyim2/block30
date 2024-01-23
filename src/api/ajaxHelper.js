const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function registerUser(userObj) {
  try {
    const resp = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const json = await resp.json();
    console.log(json.token);
    return json.token;
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser(userObj) {
  try {
    const resp = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    const json = await resp.json();
    return json.token;
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(token) {
  try {
    const resp = await fetch(`${API_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await resp.json();
    console.log(json);
    return json;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchBooks() {
  try {
    const resp = await fetch(`${API_URL}/books`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await resp.json();
    console.log(json);
    return json.books;
  } catch (err) {
    console.error(err);
  }
}

export async function checkoutBook(id, token) {
  try {
    const rsp = await fetch(`${API_URL}/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Typer": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await rsp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

export const fetchSingleBook = async (bookId) => {
  try {
    const rsp = await fetch(`${API_URL}/books/${bookId}`);
    const json = await rsp.json();
    return json.book;
  } catch (err) {}
};
