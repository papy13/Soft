    initTabTension() {
        this.TabTension = [
            {
                numeroDuNoeudActuel: this.secondFormData[0].numeroDuNoeudActuel,
                tensionAuNoeud: +this.U0
            }
        ];
        for (let i = 1; i < this.secondFormData.length; i++) {
            const cumul = this.cumul(i, 'nombreDabonnesAuNoeud');
            const kf = this.getKF(cumul);
            const _cumulChargePro = this.cumulChargePro(i);
            const _cumPuiFoisonnee = this.cumulPuissanceFoisonnee(kf, i, 'nombreDabonnesAuNoeud');
            const cumulPuiss = this.cumulPuissanceNoeud(_cumulChargePro, _cumPuiFoisonnee);
            this.TabTension.push({
                numeroDuNoeudActuel: this.secondFormData[i].numeroDuNoeudActuel,
                tensionAuNoeud: this.TabTension[i - 1].tensionAuNoeud - this.ChuteTensionNoeud(i, cumulPuiss)
            });
        }
    }
