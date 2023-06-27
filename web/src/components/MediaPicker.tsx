"use client";
/*
  você não pode utilizar onChange a menos que o componente seja um client
  component ou seja, o componente tem que possuir JS no lado do navegador.
  Utilizando use client você sinaliza ao Next que envie o JS necessário
  para o funcionamento deste component para o navegador.
*/

import { ChangeEvent, useState } from "react";

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewUrl = URL.createObjectURL(files[0]);
    setPreview(previewUrl);
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="aspec-video w-full rounded-lg object-cover"
        />
      )}
    </>
  );
}
