/** @format */

const content = new Map([
  [
    "Tri à bulles",
    {
      title: "Tri à bulles",
      content: `<p style="text-align: justify; text-justify: inter-word;">
           Le tri à bulles consiste à continuer de parcourir la liste des  éléments à trier,
           tout en permutant chaque deux éléments adjacents dans la liste qui ne sont pas dans le bon ordre.
           Le parcours de la liste s'arrête lorsqu' on fait un tour complet sans faire de permutation.
        </p>
        <table class="u-full-width">
            <thead>
              <tr>
                <th>Complexité dans le meilleur des cas</th>
                <th>Complexité dans le pire des cas</th>
                <th>Complexité en moyenne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Θ(n)</td>
                <td>Θ(n2)</td>
                <td>Θ(n2)</td>
              </tr>
            </tbody>
        </table>
        `,
      links: `
            <h3>Links</h3>
            <ul>
                <li>
                    <a href="http://lwh.free.fr/pages/algo/tri/tri_bulle.html" target="_blank">
                        Le tri à bulles ou tri par propagation
                    </a>
                </li>
                <li>
                    <a href="https://rmdiscala.developpez.com/cours/LesChapitres.html/Cours4/TBchap4.6.htm" target="_blank">
                        Le tri à bulle
                    </a>
                </li>
            </ul>
        `,
    },
  ],
  [
    "Tri par insertion",
    {
      title: "Tri par insertion",
      content: `
        <p style="text-align: justify; text-justify: inter-word;">
            Le tri par insertion consiste à insérer l'élément courant dans la sous-table triée des éléments précédents au bon endroit.
        </p>
        <table class="u-full-width">
            <thead>
              <tr>
                <th>Complexité dans le meilleur des cas</th>
                <th>Complexité dans le pire des cas</th>
                <th>Complexité en moyenne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Θ(n)</td>
                <td>Θ(n2)</td>
                <td>Θ(n2)</td>
              </tr>
            </tbody>
        </table>
        `,
      links: ``,
    },
  ],
  [
    "Tri fusion",
    {
      title: "Tri fusion",
      content: `<p style="text-align: justify; text-justify: inter-word;">
            Trie par fusion consiste à diviser le tableau en deux sous tableau, trier chacun des deux tableaux puis merger les deux. Pour la trie des sous-tableaux on applique le même algorithme
        </p>
        <table class="u-full-width">
            <thead>
              <tr>
                <th>Complexité dans le meilleur des cas</th>
                <th>Complexité dans le pire des cas</th>
                <th>Complexité en moyenne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Θ(nlog(n))</td>
                <td>Θ(nlog(n))</td>
                <td>Θ(nlog(n))</td>
              </tr>
            </tbody>
        </table>`,
      links: ``,
    },
  ],
  [
    "Tri rapide",
    {
      title: "Tri rapide",
      content: `<p style="text-align: justify; text-justify: inter-word;">
            Tri rapide Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style="text-align: justify; text-justify: inter-word;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>`,
      links: ``,
    },
  ],
  [
    "Tri par tas",
    {
      title: "Tri par tas",
      content: `<p style="text-align: justify; text-justify: inter-word;">
            Tri par tas Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>`,
      links: ``,
    },
  ],
]);

const fonSize = new Map([
  [5, { size: 16, decalageH: 5, decalageV: 11, frameRate: 1 }],
  [10, { size: 14, decalageH: 5, decalageV: 13, frameRate: 1 }],
  [15, { size: 14, decalageH: 5, decalageV: 15, frameRate: 2 }],
  [20, { size: 14, decalageH: 5, decalageV: 17, frameRate: 3 }],
  [25, { size: 14, decalageH: 5, decalageV: 19, frameRate: 3 }],
  [30, { size: 12, decalageH: 2, decalageV: 21, frameRate: 3 }],
  [35, { size: 12, decalageH: 2, decalageV: 22, frameRate: 15 }],
  [40, { size: 12, decalageH: 2, decalageV: 22, frameRate: 15 }],
  [45, { size: 12, decalageH: 2, decalageV: 22, frameRate: 15 }],
  [50, { size: 12, decalageH: 1, decalageV: 22, frameRate: 15 }],
  [55, { size: 12, decalageH: 1, decalageV: 22, frameRate: 15 }],
  [60, { size: 12, decalageH: 0, decalageV: 22, frameRate: 20 }],
  [65, { size: 12, decalageH: 0, decalageV: 22, frameRate: 20 }],
  [70, { size: 12, decalageH: 0, decalageV: 22, frameRate: 20 }],
  [75, { size: 12, decalageH: 0, decalageV: 22, frameRate: 20 }],
  [80, { size: 10, decalageH: 0, decalageV: 22, frameRate: 20 }],
]);
