import Section from './section'

const Cgu = () => (
  <Section>
    <div className='row'>
      <div>
        <h2>Conditions Générales d’Utilisation</h2>
        <p>Tout utilisateur de la plateforme reconnaît expressément souscrire sans réserve aux présentes conditions générales d’utilisation (CGU). L’utilisation de la plateforme suppose le respect total des lois, règlements et tous les autres textes juridiques en vigueur. Il conviendra de respecter l’ensemble de ces dispositions et règles en toutes circonstances. A défaut, l’utilisateur est conscient qu’il risque des sanctions civiles, pénales et/ou disciplinaires.</p>

        <h4>Disponibilité du site</h4>
        <p>L’éditeur s’engage à mettre en œuvre tout ce qui est possible techniquement pour sécuriser l’accès et l’utilisation du site cadastre.data.gouv.fr. Il est accessible 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure ou de survenance d’un événement hors du contrôle de l’éditeur et sous réserve d’éventuelles pannes et interventions de maintenance nécessaires au bon fonctionnement de la plateforme.</p>
        <p>L’éditeur ne garantit pas que la plateforme fonctionne de manière ininterrompue, sécurisée ou qu’elle soit exempte d’erreurs. Les interventions de maintenance pourront être effectuées sans que les utilisateurs de cadastre.data.gouv.fr n’aient été préalablement avertis.</p>
        <p>L’éditeur ne peut être tenu pour responsable d’une éventuelle rupture de ce service ou d’un problème technique empêchant un utilisateur d’accéder au site cadastre.data.gouv.fr.</p>
        <p>L’éditeur se réserve la possibilité de refuser l’accès aux services offerts par cadastre.data.gouv.fr en cas d’usage abusif ou de violation de dispositions législatives ou réglementaires en vigueur.</p>

        <h4>Accès aux données personnelles</h4>
        <p>
          En application de la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, les utilisateurs de la plateforme data.gouv.fr disposent notamment d’un droit d’accès et de rectification auprès de l’éditeur de la plateforme.<br />
          Ce droit s’exerce auprès de la Mission Etalab, Direction interministérielle du numérique et du système d’information et de communication de l’État (DINSIC), 20 avenue de Ségur, 75007 Paris.
        </p>
        <p>La plateforme data.gouv.fr a été déclarée à la Commission Nationale de l’Informatique et des Libertés sous le numéro : eRa0876341t.</p>
      </div>

      <div>
        <h2>Nous contacter</h2>
        <p><a href='mailto:contact@cadastre.data.gouv.fr'>contact@cadastre.data.gouv.fr</a></p>

        <h2>Mentions légales</h2>
        <h4>Editeur</h4>
        <p>Direction interministérielle du numérique et du système d’information et de communication de l’État (DINSIC)<br />
        20, avenue de Ségur<br />
        75007 Paris<br />
        dinsic-sec.sgmap [à] modernisation.gouv.fr</p>

        <p>Directeur de la publication : M. Henri Verdier, DINSIC</p>

        <h4>Hébergeur</h4>
        <p>Société OVH<br />
        SAS au capital de 10 059 500 €<br />
        RCS Lille Métropole 424 761 419 00045<br />
        Code APE 6311Z<br />
        Siège social : 2 rue Kellermann - 59100 Roubaix - France.</p>
      </div>

    </div>
    <style jsx>{`
      .row {
        display: flex;
      }

      .row > div:nth-child(2) {
        width: 80%
        margin-left: 3em;
      }
      `}</style>
  </Section>
)

export default Cgu
