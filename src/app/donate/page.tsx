import Image from 'next/image'

export default function Donate() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Donate</h1>
      <p className="font-bold">You can donate to me via these platforms:</p>
      <div className="space-y-4">
        <details className="rounded-lg border border-gray-700 p-4">
          <summary className="cursor-pointer font-semibold">Pix (Brazil / BRL)</summary>
          <div className="mt-4 space-y-2">
            <p>
              Email:{' '}
              <a href="mailto:lucmsilva651@gmail.com" className="underline hover:text-[#4040ff]">
                lucmsilva651@gmail.com
              </a>
            </p>
            <p>Random key: 8d6a266f-59e5-4084-be71-ee134b21e6de</p>
            <details className="mt-2">
              <summary className="cursor-pointer">QR Code (w/ default message)</summary>
              <Image
                src="https://telegra.ph/file/7250a86d7f1eb36aec74f.jpg"
                alt="Pix QR Code"
                width={250}
                height={250}
                className="mt-2"
              />
            </details>
          </div>
        </details>
        <details className="rounded-lg border border-gray-700 p-4">
          <summary className="cursor-pointer font-semibold">IBAN/SWIFT (USD)</summary>
          <div className="mt-4 space-y-2 text-sm">
            <p>Intermediary bank (Field 56):</p>
            <p>SWIFT: CHASUS33</p>
            <p>ABA: 021000021</p>
            <p>Account: 360556937</p>
            <p>JP Morgan Chase N.A.</p>
            <p>Destination bank (Field 57):</p>
            <p>SWIFT: ITEMBRSP</p>
            <p>Beneficiary bank: Banco Inter S.A.</p>
            <p>Beneficiary (Field 59):</p>
            <p>Beneficiary in Brazil: LUCAS GABRIEL MACHADO DA SILVA</p>
            <p>IBAN: BR7200416968000010345618602C1</p>
            <p>Additional information:</p>
            <p>JP Morgan address: 270 Park Avenue, New York, NY, 10017, United States</p>
            <p>Banco Inter address: 1219 Barbacena Ave, Belo Horizonte, MG, 30190-924, Brazil</p>
          </div>
        </details>
        <details className="rounded-lg border border-gray-700 p-4">
          <summary className="cursor-pointer font-semibold">IBAN/SWIFT (EUR)</summary>
          <div className="mt-4 space-y-2 text-sm">
            <p>Intermediary bank (Field 56):</p>
            <p>SWIFT: CHASDEFX</p>
            <p>JP Morgan AG</p>
            <p>Destination bank (Field 57):</p>
            <p>SWIFT: ITEMBRSP</p>
            <p>Beneficiary bank: Banco Inter S.A.</p>
            <p>Beneficiary (Field 59):</p>
            <p>Beneficiary in Brazil: LUCAS GABRIEL MACHADO DA SILVA</p>
            <p>IBAN: BR7200416968000010345618602C1</p>
            <p>Additional information:</p>
            <p>Intermediary bank address: Taunustor 1, Frankfurt, Germany</p>
            <p>Banco Inter address: 1219 Barbacena Ave, Belo Horizonte, MG, 30190-924, Brazil</p>
          </div>
        </details>
        <details className="rounded-lg border border-gray-700 p-4">
          <summary className="cursor-pointer font-semibold">Cryptocurrency (BTC, ETH, etc.)</summary>
          <div className="mt-4 space-y-2 text-sm">
            <p>Note: You should only send to the specific address of your coin</p>
            <p>Sending any other coins may result in permanent loss</p>
            <p>ETH, TON and USDT: 0xbfd30d120ddbab1e8e9d9a653a232b9940fb95ba</p>
          </div>
        </details>
      </div>
      <p className="text-sm text-gray-400">
        Anyway, these donations are only to support me. You don&apos;t necessarily have to donate, and no one should be
        obligated to do so.
      </p>
    </div>
  )
}

