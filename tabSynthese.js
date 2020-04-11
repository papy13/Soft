    getTabSynthese(tabNoeuds: NoeudDto[]) {
        const result = [] as TabSyntheseDTO[];
        const verifyArray = new Array(tabNoeuds.length).fill(false);
        for (let i = 0; i < tabNoeuds.length; i++) {
            if (!verifyArray[i]) {
                result.push(
                    {
                        natureDuTroncon: tabNoeuds[i].natureDuTroncon,
                        ameDuTroncon: tabNoeuds[i].ameDuTroncon,
                        sectionDuTroncon: tabNoeuds[i].sectionDuTroncon,
                        longueurTotal: tabNoeuds[i].longueurDuTroncon
                    }
                );
                verifyArray[i] = true;
            }
            for (let j = i; j < tabNoeuds.length; j++) {
                if (!verifyArray[j]) {
                    if (
                        tabNoeuds[i].natureDuTroncon == tabNoeuds[j].natureDuTroncon &&
                        tabNoeuds[i].ameDuTroncon == tabNoeuds[j].ameDuTroncon &&
                        tabNoeuds[i].sectionDuTroncon == tabNoeuds[j].sectionDuTroncon
                    ) {
                        let long = +result[i].longueurTotal;
                        long += +tabNoeuds[i].longueurDuTroncon;
                        result[i].longueurTotal = long;
                        verifyArray[j] = true;
                    }
                }
            }
        }
        return result;
    }
