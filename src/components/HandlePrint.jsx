const HandlePrint = () => {
  const printContent = document.getElementById("billSection").innerHTML;

  const win = window.open("", "_blank");

  // Copy all <link> and <style> tags
  const styles = Array.from(
    document.querySelectorAll('link[rel="stylesheet"], style')
  )
    .map((node) => node.outerHTML)
    .join("\n");

  win.document.write(`
    <html>
      <head>
        <title>Print</title>
        ${styles}
      </head>
      <body class="p-4  ">
   <div class="flex relative justify-between gap-5 items-center border-b-2 pb-5">
  <div class="p-4 border-2">
      ${printContent}
  </div>

  <!-- Vertical Dotted Line -->
  <div class="border-l-2 p-2 border-dashed border-black h-full"></div>

  <div class="p-4 border-2">
      ${printContent}
  </div>
</div>
      </body>
    </html>
  `);
  win.document.close();

  // Ensure print only after document is fully rendered
  win.onload = () => {
    setTimeout(() => {
      win.focus();
      win.print();
      win.close();
    }, 500); // Small delay to ensure rendering
  };
};

export default HandlePrint;
