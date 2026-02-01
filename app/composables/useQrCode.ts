export function useQrCode() {
  const texto = ref("");
  const LIMITE = 5; // Pode alterar quantos historicos salvar
  const STORAGE_KEY = "qr-historico";
  const historico = ref<string[]>([]);

  if (process.client) {
    // carrega histórico salvo
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) {
      historico.value = JSON.parse(salvo);
    }

    //um "observador" se o JSON mudar ele chama o banco para rearmazenar
    watch(
      historico,
      (novo) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(novo));
      },
      { deep: true },
    );
  }

  function gerar(valor: string) {
    texto.value = valor;

    // remove duplicados
    historico.value = historico.value.filter((item) => item !== valor);

    historico.value.unshift(valor); // salva no historico
    historico.value = historico.value.slice(0, LIMITE); // manter so os 5 ultimos garantia
  }

  function imprimir() {
    window.print();
  }

  function baixar() {
    const img = document.querySelector("img"); // o site cria como imagem

    if (!img) {
      alert("Nenhum QR Code encontrado"); //Tratamento de erro para qrCode vazio
      return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
  }

  return {
    texto,
    historico,
    gerar,
    imprimir,
    baixar,
  };
}
