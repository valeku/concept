import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageTransformService {

  range;
  fileHolder;

  options;

  quill;


  maxSize = 50;

  allSize = 0;

  limitError = "You have exceeded the limit";

  constructor(quill, options) { 
    this.quill = quill;
    this.options = options;
  }

  selectLocalImage() {
    this.range = this.quill.getSelection();
    this.fileHolder = document.createElement("input");
    this.fileHolder.setAttribute("type", "file");
    this.fileHolder.setAttribute("accept", "image/*");
    this.fileHolder.setAttribute("style", "visibility:hidden");

    this.fileHolder.onchange = () => this.fileChanged();

    document.body.appendChild(this.fileHolder);

    this.fileHolder.click();

    window.requestAnimationFrame(() => {
      document.body.removeChild(this.fileHolder);
    });
  }

  async fileChanged() {
    const file = this.fileHolder.files[0];
    console.log("fileChanged", { file });
    if (!file) {
      return;
    }
    const base64ImageSrc = await this.file2b64(file);
    const base64ImageSmallSrc = await this.downscaleImageFromUrl(
      base64ImageSrc
    );
    this.insertToEditor(base64ImageSmallSrc);
  }

  async downscaleImageFromUrl(dataUrl) {
    const dataUrlCompressed = await this.downscaleImage(
      dataUrl,
      this.options.maxWidth,
      this.options.maxHeight,
      this.options.imageType,
      this.options.quality,
      //this.debug
    );
    console.log("downscaleImageFromUrl", { dataUrl, dataUrlCompressed });
    return dataUrlCompressed;
  }

  insertToEditor(url) {
    console.log('insertToEditor', {url});
    this.range = this.quill.getSelection();
    const range = this.range;
    // Insert the compressed image
    this.logFileSize(url);
    this.quill.insertEmbed(range.index, "image", `${url}`, "user");
    // Move cursor to next position
    range.index++;
    this.quill.setSelection(range, "api");
  }

  logFileSize(dataUrl) {
    const head = "data:image/png;base64,";
    const fileSizeBytes = Math.round(((dataUrl.length - head.length) * 3) / 4);
    const fileSizeKiloBytes = (fileSizeBytes / 1024).toFixed(0);

    this.allSize += fileSizeBytes;

    
    console.log("estimated img size: " + fileSizeKiloBytes + " kb");

    if (this.allSize > this.maxSize)
      console.log("this.allSize > this.maxSize: " + this.allSize +  " > " + this.maxSize );
  }


// Take an image URL, downscale it to the given width, and return a new image URL.
async downscaleImage(
  dataUrl,
  maxWidth,
  maxHeight,
  imageType,
  imageQuality
) {
  "use strict";
  // Provide default values
  imageType = imageType || "image/jpeg";
  imageQuality = imageQuality || 0.7;

  // Create a temporary image so that we can compute the height of the downscaled image.
  const image = new Image();
  image.src = dataUrl;
  await new Promise((resolve) => {
    image.onload = () => {
      resolve();
    };
  });
  const [newWidth, newHeight] = this.getDimensions(
    image.width,
    image.height,
    maxWidth,
    maxHeight
  );

  // Create a temporary canvas to draw the downscaled image on.
  const canvas = document.createElement("canvas");
  canvas.width = newWidth;
  canvas.height = newHeight;

  // Draw the downscaled image on the canvas and return the new data URL.
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, newWidth, newHeight);
  const newDataUrl = canvas.toDataURL(imageType, imageQuality);
  console.log("downscaling image...", {
    args: {
      dataUrl,
      maxWidth,
      maxHeight,
      imageType,
      imageQuality,
      //debug,
    },
    newHeight,
    newWidth,
  });
  return newDataUrl;
}

getDimensions(inputWidth, inputHeight, maxWidth, maxHeight) {
  if (inputWidth <= maxWidth && inputHeight <= maxHeight) {
    return [inputWidth, inputHeight];
  }
  if (inputWidth > maxWidth) {
    const newWidth = maxWidth;
    const newHeight = Math.floor((inputHeight / inputWidth) * newWidth);

    if (newHeight > maxHeight) {
      const newHeight = maxHeight;
      const newWidth = Math.floor((inputWidth / inputHeight) * newHeight);
      return [newWidth, newHeight];
    } else {
      return [newWidth, newHeight];
    }
  }
  if (inputHeight > maxHeight) {
    const newHeight = maxHeight;
    const newWidth = Math.floor((inputWidth / inputHeight) * newHeight);
    return [newWidth, newHeight];
  }
}

  async  file2b64(file) {
    const fileReader = new FileReader();

    const promise = new Promise((resolve) => {
      fileReader.addEventListener(
        "load",
        () => {
          const base64ImageSrc = fileReader.result;
          resolve(base64ImageSrc);
        },
        false
      );
    });
    fileReader.readAsDataURL(file);
    return promise;
  }
}
