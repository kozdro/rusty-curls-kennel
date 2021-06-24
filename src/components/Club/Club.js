import styled from "styled-components";

function Club() {
  const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    &:before,
    &:after {
      content: "";
      display: block;
      width: 200px;
      height: 3px;
      margin: 0 auto;
      background: #cf5c36;
    }
  `;

  return (
    <div style={{ padding: "80px 20%" }}>
      <Title>ZKwP/FCI</Title>
      <p style={{ marginTop: "30px" }}>
        Związek Kynologiczny w Polsce jest najstarszą polską organizacją
        kynologiczną, zrzeszającą miłośników i hodowców psów rasowych. 2 czerwca
        1939 roku na Zjeździe FCI w Szwecji Polski Kennel Klub (dawna nazwa
        ZKwP) został przyjęty do FCI i członkostwo Polski w tej organizacji trwa
        nieprzerwanie do dziś.
        <br />
        FCI, organizacja będąca międzynarodową federacją krajowych klubów
        kynologicznych powstała w 1911 roku i obecnie zrzesza ponad 90 członków
        reprezentujących kraje ze wszystkich kontynentów.
        <br />
        Cele statutowe Związku realizowane są poprzez opartą na podstawach
        naukowych hodowlę, organizowanie szkoleń i zawodów psów obrończych,
        towarzyszących, chartów oraz - we współpracy z Polskim Związkiem
        Łowieckim - wielokierunkowo szkolonych i użytkowanych psów ras
        myśliwskich. Związek organizuje rocznie ponad 200 wystaw psów rasowych
        różnej rangi, w tym kilkanaście wystaw międzynarodowych pod patronatem
        FCI.
      </p>

      <h3
        style={{ marginTop: "30px", marginBottom: "10px", textAlign: "center" }}
      >
        Dlaczego pies rasowy to tylko ZKwP/FCI?
      </h3>
      <p>
        Obecnie każdy może zarejestrować swoje własne stowarzyszenie wydające
        rodowody, tym samym każdy kundelek, czyli pies bez udokumentowanego
        pochodzenia może takowy posiadać. Od pewnego czasu powstaje co raz
        więcej "hodowli", które sprzedają psy "rasowe" z "rodowodem".
        <br />
        Dlaczego tak ważne jest, by kupować psy w ZKwP? Związek Kynologiczny w
        Polsce jest organizacją kynologiczną, która przykłada największą wagę do
        warunków panujących w hodowli, dobrostanu psów oraz sposobu odchowu
        szczeniąt. Aby szczeniaki dostały metryki, muszą przejść kontrolę.
        Kierownik sekcji ogląda szczeniaki podczas przeglądu miotu, który często
        odbywa się w hodowli. Jeśli zauważy jakieś nieprawidłowości w sposobie
        odchowu lub traktowaniu psów - zaznaczone to zostanie w protokole miotu.
        Jeśli nieprawidłowości są poważne - szczeniaki nie dostaną metryk lub
        hodowca może zostać zawieszony w prawach. Wszystko po to, aby mieć
        pewność, że dobrostan psów i ich rasowość są niepodważalne.
        <br />
        <br />
        Presja ze strony innych hodowców wymusza także troskę o zdrowie psów
        rasowych. Większość hodowców bada swoje psy nawet jeśli nie jest to
        wymagane przez regulamin ZKwP, a poszukujący reproduktorów hodowcy
        wymagają od ich właścicieli badań. Przekłada się to na lepsze zdrowie
        populacji i zwiększa szanse, że kupimy zdrowego szczeniaka.
        <br />
        <br />
        ZkwP to jedyna organizacja prowadząca rzetelne księgi rodowodowe. Daje
        to pewność, że pochodzenie psa jest udokumentowane, a rodzice są zgodni
        ze standardem wzorca. O dopuszczeniu do hodowli decyduje nie tylko
        pochodzenie i rodowód. Pies/suka musi uzyskać także uprawnienia
        hodowlane uczestnicząc w wystawach. Znacząco zwiększa to
        prawdopodobieństwo, że do hodowli używane są tylko psy zgodne z wzorcem.
        <br />
        <br />
        Przynależność do ZKwP nie gwarantuje, że zawsze trafimy na mądrego,
        uczciwego hodowcę z pasją. Także tu zdarzają się czarne owce. Przed
        decyzją o zakupie psa dobrze jest porozmawiać z hodowcą oraz odwiedzić
        hodowlę, aby zobaczyć, w jakich warunkach żyją psy i jak są traktowane.
        Oczywiście, istnieje jakiś margines hodowców, którzy nie zwracają uwagi
        na problemy zdrowotne swoich psów. Bywają oni piętnowani i wykluczeni
        przez innych. Od takich hodowli wszyscy odpowiedzialni hodowcy trzymają
        się z daleka. 
        <br/>
        Nie wspieraj pseudo-hodowców czerpiących zyski z niedoli
        psów (bez względu na to, w jakiej organizacji są zarejestrowani). Kup
        psa od odpowiedzialnego hodowcy z pasją lub adoptuj ze schroniska.
      </p>
    </div>
  );
}

export default Club;
