import React, {Fragment} from "react";
import ImgOne from "../../mimified-img/psychothérapie.png";
import ImgTwo from "../../mimified-img/identité-sexuelle.jpg";
import ImgThree from "../../mimified-img/planning-familiale.jpg";
import ImgFive from "../../mimified-img/supervision.jpg";
import ImgSix from "../../mimified-img/expertise.jpg";
export default function SectionOne() {
    return (
        <Fragment>
            <section className={"section-one"} id={"section-one"}>
                <div className={"text"}>
                    <div className={"part-one"}>
                        <div className={"text-one"}>
                            <strong>{"Psychothérapie"}</strong>
                            <div className={"img-one"}>
                                <img src={ImgOne} />
                            </div>
                            <p>
                                {
                                    "Partant du principe que nombre de nos difficultés sont liées à des mouvements intérieurs qui nous échappent - nous laissant souvent perplexes face à nos propres émotions, sensations et actes - la psychothérapie offre le moyen de se réapproprier le sens de nos réactions en explorant notre histoire personnelle et en retrouvant le sens de nos réactions actuelles dans la perspective globale de notre vie."
                                }
                            </p>
                            <p>
                                {
                                    "Le cabinet de consultation permet de mettre en place un cadre psychothérapeutique dans lequel, dans un climat de confiance, d'accueil, de bienveillance et d'absence de jugement, il est possible de déplier les ressentis, de s'y attarder, d'en comprendre le sens, de retisser le fil conducteur de l'historique de la douleur et de la replacer dans son contexte original et non plus dans les réalités du présent."
                                }
                            </p>
                        </div>
                    </div>
                    <div className={"part-two"}>
                        <div className={"text-two"}>
                            <strong>
                                {
                                    "Inconfort lié à l'orientation ou l'identité sexuelle et de genre"
                                }
                            </strong>
                            <div className={"img-two"}>
                                <img src={ImgTwo} />
                            </div>
                            <p>
                                {
                                    "Le sentiment d'être homme ou femme peut parfois être en conflit avec la réalité anatomique. En effet, certaines personnes se ressentent profondément différentes de ce que le genre de leur apparence laisse à voir. Cette impair est susceptible de causer de la détresse psychique, sous forme d'évitement, de honte, de gêne, de dépressivité, d'idées suicidaires, de détérioration de l'estime de soi et d'impossibilité à fonctionner socialement ou professionnelement."
                                }
                            </p>
                            <p>
                                {
                                    "Au sein d'une équipe pluridisciplinaire, il est possible de pouvoir réfléchir à la question et d'envisager un moyen de changer les choses dans une perspective d'épanouisssement personnel, d'acceptation de soi."
                                }
                            </p>
                        </div>
                    </div>

                    <div className={"part-three"}>
                        <div className={"text-three"}>
                            <strong>{"Planning Familial"}</strong>
                            <div className={"img-three"}>
                                <img src={ImgThree} />
                            </div>
                            <p>
                                {
                                    "Le Planning Familial est une structure de prévention et de soins axés sur la santé sexuelle. Il propose des animations à la Vie Sexuelle et Affective, des consultations gynécologiques, psychothérapeutiques, conjugales, juridiques et sociales. Subsidié par le gouvernement, il pratique des prix planchers, adaptés aux portefeuille des consultants."
                                }
                            </p>
                        </div>
                    </div>
                    <div className={"part-four"}>
                        <div className={"img-four"}></div>
                        <div className={"text-four"}>
                            <strong>{"Module de formation"}</strong>
                            <p>
                                {
                                    "Des modules de formation sur l'épreuve de Rorschach peuvent être suivi chaque année : présentation de l'épreuve et des consignes de passation, standardisation du recueil des réponses, système de cotatation et d'interprétation. Plus d'informations au 0479217263."
                                }
                            </p>
                        </div>
                    </div>
                    <div className={"part-five"}>
                        <div className={"img-five"}></div>
                        <div className={"text-five"}>
                            <strong>{"Supervision"}</strong>
                            <div className={"img-five"}>
                                <img src={ImgFive} />
                            </div>
                            <p>
                                {
                                    "Face aux difficultés, obstacles et question que peuvent rencontrer des thérapeutes dans des cas particuliers ou complexes, il est possible de disposer d'un espace de réflexion afin de pouvoir redynamiser un processus thérapeutique. Conditions et informations au 0479217263."
                                }
                            </p>
                        </div>
                    </div>
                    <div className={"part-six"}>
                        <div className={"img-six"}></div>
                        <div className={"text-six"}>
                            <strong>{"Evaluation et expertises"}</strong>
                            <div className={"img-six"}>
                                <img src={ImgSix} />
                            </div>

                            <p>
                                {
                                    "La psychologie dispose de nombreux outils permettant de dresser une photographie de certains aspects du psychisme. Qu'il s'agisse d'un cadre privé, légal ou médical, il est très souvent demandé à des psychologues de répondre à des questions précises sur le fonctionnement mental. Ainsi dans un aspect légal, la responsabilité ou la crédibilité du discours sont régulièrement au centre des questions des tribunaux. Au niveau médical, c'est la solidité du psychisme qui demande à être évaluée avant, par exemple, une demande de chirurgie plastique, une gastroplastie ou encore une intervention de changement de sexe. Au niveau privé, les résultat d'un testing peuvent reveler certains aspects qui s'avèrent interessants de travailler en psychothérapie, permettant par là d'accélerer le processus, de fournir une base de travail ou d'étoffer une demande."
                                }
                            </p>
                            <p>
                                {
                                    "Les épreuves projectives de type Rorschach, TAT, Szondi, donnent des infomations cruciales sur le fonctionnement cognitif, affectif, fantasmatique et relationnel du sujet. Les inventaires de personnalité permettent de situer certaines tendances du sujet à présenter une symptomatologie psychiatrique ou du moins des traits similaires à ceux vécus par les grandes nosographies psychiatriques.Les échelles permettent de répondre à une question précise en situant le sujet dans une norme statistique  (symptomes dépressifs, anxieux, trouble de l'estime de soi,...)"
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
