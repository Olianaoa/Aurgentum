<script setup>
</script>
<template>
    <h2>Таблица размеров</h2>
    <div class="everything">
        <table>
            <thead>
                <tr>
                    <th>Диаметр кольца, мм</th>
                    <th>Длина окружности, мм</th>
                    <th>Размер кольца</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>14</td>
                    <td>44</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>14,5</td>
                    <td>45,2</td>
                    <td>14,5</td>
                </tr>
                <tr>
                    <td>14,9</td>
                    <td>46,5</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>15,3</td>
                    <td>47,8</td>
                    <td>15,5</td>
                </tr>
                <tr>
                    <td>16,1</td>
                    <td>50,3</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>16,5</td>
                    <td>51,5</td>
                    <td>16,5</td>
                </tr>
                <tr>
                    <td>16,9</td>
                    <td>52,8</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>17,4</td>
                    <td>54</td>
                    <td>17,5</td>
                </tr>
                <tr>
                    <td>18,2</td>
                    <td>56,6</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>18,5</td>
                    <td>57,8</td>
                    <td>18,5</td>
                </tr>
                <tr>
                    <td>18,9</td>
                    <td>59,1</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>19,4</td>
                    <td>60,3</td>
                    <td>19,5</td>
                </tr>
                <tr>
                    <td>19,8</td>
                    <td>61,6</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>20,2</td>
                    <td>62,8</td>
                    <td>20,5</td>
                </tr>
                <tr>
                    <td>21,1</td>
                    <td>65,3</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>21,5</td>
                    <td>66,6</td>
                    <td>21,5</td>
                </tr>
                <tr>
                    <td>22,3</td>
                    <td>69,1</td>
                    <td>22</td>
                </tr>
            </tbody>
        </table>

        <h2>Советы по измерению</h2>
        <div class="block">
            <ul>
                <li>Лучшее время суток для определения длины окружности пальца в миллиметрах — середина дня. Не
                    проводите
                    измерения после занятий спортом, в жару, при повышенной влажности, а также после того, как вы зашли
                    с
                    мороза.
                </li>
                <li>Измеряя палец или кольцо, всегда округляйте до ближайшего миллиметра.
                </li>
                <li>Чем толще кольцо, тем плотнее оно прилегает, поэтому, если вы выбираете широкое кольцо, то мы
                    рекомендуем брать его на полразмера больше.
                </li>
            </ul>
        </div>

        <h2>Популярные вопросы</h2>
        <div class="block">
            <details>
                <summary>Что, если кольцо все равно окажется неподходящим?</summary>
                <p>Помните, что таблица размеров колец не является профессиональным измерением и ее следует использовать
                    скорее в качестве ориентира. Встреча с одним из наших консультантов в бутике — лучший способ
                    убедиться, что вы выбрали верный размер кольца.</p>
            </details>
            <details>
                <summary>Что делать, если вы планируете сделать предложение-сюрприз?</summary>
                <p>Помимо того, где вы планируете сделать неожиданное предложение, заранее подобрать кольцо, подходящее
                    к пальцу возлюбленной, может оказаться непростой задачей.</p>

                <p>Самый простой способ узнать размер кольца вашего партнера — «одолжить» кольцо, которое он уже носит
                    на безымянном пальце и измерить его диаметр.</p>
            </details>
        </div>
    </div>
</template>
<style scoped>
table {
    margin: 0 auto 80px auto;
    border: 1px solid var(--black);
    border-collapse: collapse;
}

table th {
    font-weight: bold;
    padding: 5px;
    background: var(--gold);
    border: 1px solid var(--black);
}

table td {
    background: var(--white);
    border: 1px solid var(--black);
    padding: 5px;
}

.block {
    width: 80%;
    margin: 0 auto;
    text-align: justify;
}

li {
    margin: 20px 0;
}


details {
    border-bottom: 1px solid var(--light_gray);
    overflow: hidden;
    transition: all 0.2s ease;
}

summary {
    padding: 1rem;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
}

summary::marker {
    display: none;
}

summary::after {
    content: url(/src/img/icons/arrow_down.svg);
    font-size: 1.5rem;
    margin-left: auto;
    transition: transform 0.2s ease;

}

details[open] summary::after {
    content: url(/src/img/icons/arrow_up.svg);
}

details[open] {
    transform: scale(1.01);
    border-bottom: 1px solid var(--black);
    border-top: 1px solid var(--black);
}

details p {
    text-align: left;
    padding: 0 1rem 1rem 3rem;
    line-height: 1.5;
    color: var(--black);
}
</style>