import {useState} from "react";
import InputDefault from "../components/input-components/InputDefault";
import ButtonDefault from "../components/button-components/ButtonDefault";
import BooksType from "../types/BooksType";
import Modal from "../components/modal-components/Modal";
import DefaultPage from "../config/default-page/DefaultPage";
import DivListStyled from "../components/DivListStyled";
import PStyled from "../components/PStyled";

function Home() {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [publication, setPublication] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [books, setBooks] = useState<BooksType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [bookModal, setBookModal] = useState<boolean>(false);
  const [openEditBookModal, setOpenEditBookModal] = useState<boolean>(false);

  function openModal() {
    setOpen(!open);
  }

  function bookDetailsModal() {
    setBookModal(!bookModal);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id && title && author && publication && date && gender && description) {
      const book: BooksType = {
        id,
        title,
        author,
        publication,
        date,
        gender,
        description,
      };

      const newBooks = [...books, book];
      setBooks(newBooks);
    }
    setId("");
    setTitle("");
    setAuthor("");
    setPublication("");
    setDate("");
    setGender("");
    setDescription("");

    setOpen(false);
  }

  function deleteBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const booksFilter = books.filter((book) => book.id !== id);
    setBooks(booksFilter);
    setId("");
    setBookModal(false);
  }

  function openEditModal() {
    setOpenEditBookModal(!openEditBookModal);
  }

  function editBook(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id && title && author && publication && date && gender && description) {
      const editedBook: BooksType = {
        id,
        title,
        author,
        publication,
        date,
        gender,
        description,
      };

      const bookIndex = books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        books.splice(bookIndex, 1, editedBook);
      }
    }

    setId("");
    setOpenEditBookModal(false);
  }

  // funtion searchByAuthor() {

  // }

  return (
    <DefaultPage>
      <h1 style={{color: "#fff"}}>A BIBLIOTECA ENCANTADA</h1>
      <ButtonDefault label="Adicionar Livro" action={openModal} />
      {open && (
        <Modal action={openModal} title="Cadastrar Livros">
          <form onSubmit={handleSubmit}>
            <InputDefault action={setId} key="id" label="ID" value={id} />
            <InputDefault action={setTitle} key="title" label="Titulo" value={title} />
            <InputDefault action={setAuthor} key="author" label="Autor" value={author} />
            <InputDefault action={setPublication} key="publication" label="Ano de Publicação" value={publication} />
            <InputDefault action={setDate} key="date" label="Data de Cadastro" value={date} />
            <InputDefault action={setGender} key="" label="Genero" value={gender} />
            <InputDefault action={setDescription} key="description" label="Descrição" value={description} />
            <ButtonDefault label="Cadastrar" type="submit" />
          </form>
        </Modal>
      )}
      <div style={{display: "flex"}}>
        {books.map((item) => (
          <DivListStyled>
            <p>Título: {item.title}</p>
            <p>Autor: {item.author}</p>
            <p>Ano de Publicação: {item.publication}</p>
            <ButtonDefault label="Ver detalhes" action={bookDetailsModal}></ButtonDefault>
            <br />
          </DivListStyled>
        ))}
      </div>
      {bookModal && (
        <Modal action={bookDetailsModal} title="Detalhes do Livro">
          {books.map((item) => (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
              <PStyled>ID: {item.id}</PStyled>
              <PStyled>Título: {item.title}</PStyled>
              <PStyled>Autor: {item.author}</PStyled>
              <PStyled>Ano de Publicação: {item.publication}</PStyled>
              <PStyled>Data de cadastro: {item.date}</PStyled>
              <PStyled>Gênero: {item.gender}</PStyled>
              <PStyled>Descrição: {item.description}</PStyled>
              <form onSubmit={deleteBook} style={{display: "flex", flexDirection: "column"}}>
                <InputDefault action={setId} key="deleteId" label="Deletar ID" value={id} />
                <ButtonDefault label="Deletar Livro" type="submit" />
                <ButtonDefault label="Editar Livro" action={openEditModal} />
              </form>
            </div>
          ))}
        </Modal>
      )}
      {openEditBookModal && (
        <Modal action={openEditModal} title="Editar Livro">
          <form onSubmit={editBook}>
            <InputDefault action={setId} key="id" label="ID" value={id} />
            <InputDefault action={setTitle} key="title" label="Titulo" value={title} />
            <InputDefault action={setAuthor} key="author" label="Autor" value={author} />
            <InputDefault action={setPublication} key="publication" label="Ano de Publicação" value={publication} />
            <InputDefault action={setDate} key="date" label="Data de Cadastro" value={date} />
            <InputDefault action={setGender} key="" label="Genero" value={gender} />
            <InputDefault action={setDescription} key="description" label="Descrição" value={description} />
            <ButtonDefault label="Editar" type="submit" />
          </form>
        </Modal>
      )}
    </DefaultPage>
  );
}

export default Home;
