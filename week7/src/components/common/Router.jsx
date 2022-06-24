import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../Main/LetterMain";
import EditLetterPage from "../Main/EditLetter";
import WriteLetterPage from "../WriteLetter/WriteLetter";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/editLetterPage" element={<EditLetterPage />} />
        <Route path="/writeLetterPage" element={<WriteLetterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
