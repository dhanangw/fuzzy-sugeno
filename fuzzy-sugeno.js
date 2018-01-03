    //set range of variable permintaan and persediaan
    var minPermintaan = 1000;
    var maxPermintaan = 5000;
    var minPersediaan = 100;
    var maxPersediaan = 600;
    
    /** fungsiKeanggotaanPermintaanTurun 
     * returns membership function for variable permintaan in turun state
     * @param {*} min = minimal value of permintaan
     * @param {*} max = maximal value of permintaan
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPermintaanTurun(min, max, permasalahan) {
        var miu;

        if (permasalahan <= min) {
            miu = 1;
        } 
        if (min <= permasalahan <= max) {
            miu = (max-permasalahan)/(max-min);
        } 
        if (max <= permasalahan) {
            miu = 0;
        }

        return miu;
    }

    /** fungsiKeanggotaanPermintaanNaik
     * returns membership function for variable permintaan in naik state
     * @param {*} min = minimal value of permintaan
     * @param {*} max = maximal value of permintaan
     * @param {*} permasalahan = permintaaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPermintaanNaik(min, max, permasalahan) {
        var miu;

        if (permasalahan <= min) {
            miu = 0;
        } 
        if (min <= permasalahan <= max) {
            miu = (permasalahan-min)/(max-min);
        } 
        if (max <= permasalahan) {
            miu = 1;
        }
        
        return miu;
    }

    /**fungsiKeanggotaanPersediaanSedikit
     * returns membership function for variable persediaan in sedikit state
     * @param {*} min = minimal value of persediaan
     * @param {*} max = maximal value of persediaan
     * @param {*} permasalahan = persediaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPersediaanSedikit(min, max, permasalahan) {
        var miu;

        if (permasalahan <= min) {
            miu = 1;
        } 
        if (min <= permasalahan <= max) {
            miu = (max-permasalahan)/(max-min);
        } 
        if (max <= permasalahan) {
            miu = 0;
        }

        return miu;
    }

    /**fungsiKeanggotaanPersediaanSedikit
     * returns membership function for variable persediaan in banyak state
     * @param {*} min = minimal value of persediaan
     * @param {*} max = maximal value of persediaan
     * @param {*} permasalahan = persediaan value in the problem, which is in between min and max value
     */
    function fungsiKeanggotaanPersediaanBanyak(min, max, permasalahan) {
        var miu;

        if (permasalahan <= min) {
            miu = 0;
        } 
        if (min <= permasalahan <= max) {
            miu = (permasalahan-min)/(max-min);
        } 
        if (max <= permasalahan) {
            miu = 1;
        }
        
        return miu;
    }

    /** newRule1
     * represents the first rule for this problem
     * "JIKA permintaan TURUN dan persediaan BANYAK maka produksi = permintaan - persediaan"
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    var newRule1 = function (permasalahanPermintaan, permasalahanPersediaan){
        alfaPredikat4 = Math.min(fungsiKeanggotaanPermintaanTurun(minPermintaan,maxPermintaan,permasalahanPermintaan), fungsiKeanggotaanPersediaanBanyak(minPersediaan,maxPersediaan,permasalahanPersediaan));
        z4 = permasalahanPermintaan - permasalahanPersediaan;                
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule1
     * represents the second rule for this problem
     * "JIKA permintaan TURUN dan persediaan SEDIKIT maka produksi = permintaan"
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    var newRule2 = function (permasalahanPermintaan, permasalahanPersediaan){
        alfaPredikat4 = Math.min(fungsiKeanggotaanPermintaanTurun(minPermintaan,maxPermintaan,permasalahanPermintaan), fungsiKeanggotaanPersediaanSedikit(minPersediaan,maxPersediaan,permasalahanPersediaan));
        z4 = permasalahanPermintaan;
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule1
     * represents the third rule for this problem
     * "JIKA permintaan NAIK dan persediaan BANYAK maka produksi = permintaan"
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    var newRule3 = function (permasalahanPermintaan, permasalahanPersediaan){
        alfaPredikat4 = Math.min(fungsiKeanggotaanPermintaanNaik(minPermintaan,maxPermintaan,permasalahanPermintaan), fungsiKeanggotaanPersediaanBanyak(minPersediaan,maxPersediaan,permasalahanPersediaan));
        z4 = permasalahanPermintaan;
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };

    /** newRule1
     * represents the fourth rule for this problem
     * "JIKA permintaan NAIK dan persediaan SEDIKIT maka produksi = 1,25 * permintaan - persediaan"
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    var newRule4 = function (permasalahanPermintaan, permasalahanPersediaan){
        alfaPredikat4 = Math.min(fungsiKeanggotaanPermintaanNaik(minPermintaan,maxPermintaan,permasalahanPermintaan), fungsiKeanggotaanPersediaanSedikit(minPersediaan,maxPersediaan,permasalahanPersediaan));
        z4 = 1.25 * permasalahanPermintaan - permasalahanPersediaan;
        return {
            alfapredikat : alfaPredikat4,
            z : z4
        };
    };
    
    function tes() {
        var rule = newRule1(4000,300);
        document.write(rule.alfapredikat);
        document.write("<br>");
        document.write(rule.z);
    }

    /** defuzzyfikasi
     *  calculate the produksi amount for permintaan
     * @param {*} permasalahanPermintaan = permintaan value in the problem
     * @param {*} permasalahanPersediaan = persediaan value in the problem
     */
    function defuzzyfikasi (permasalahanPermintaan, permasalahanPersediaan){
        var rule1 = newRule1(permasalahanPermintaan, permasalahanPersediaan);
        var rule2 = newRule2(permasalahanPermintaan, permasalahanPersediaan);
        var rule3 = newRule3(permasalahanPermintaan, permasalahanPersediaan);
        var rule4 = newRule4(permasalahanPermintaan, permasalahanPersediaan);

        
        return ((rule1.alfapredikat*rule1.z)+(rule2.alfapredikat*rule2.z)+(rule3.alfapredikat*rule3.z)+(rule4.alfapredikat*rule4.z))/(rule1.alfapredikat+rule2.alfapredikat+rule3.alfapredikat+rule4.alfapredikat);
    }

    /** calculateProduksi
     * get the permintaan and persediaan value from text field and prints
     * the production amount calculated
     */
    function calculateProduksi() {
        var permintaan = document.getElementById('permintaan').value;
        var persediaan = document.getElementById('persediaan').value;

        document.write(defuzzyfikasi(permintaan, persediaan));
    }

    /** setMinPermintaan
     * set the minPermintaan variable with value from text input
     */
    function setMinPermintaan () {
        minPermintaan =  document.getElementById('newMinPermintaan').value;
    }

    /** setMaxPermintaan
     * set the maxPermintaan variable with value from text input
     */
    function setMaxPermintaan() {
        maxPermintaan =  document.getElementById('newMaxPermintaan').value;
    }

    /** setMinPersediaan
     * set the minPersediaan variable with value from text input
     */
    function setMinPersediaan(params) {
        minPersediaan =  document.getElementById('newMinPersediaan').value;
    }

    /** setMaxPersediaan
     * set the maxPersediaan variable with value from text input
     */
    function setMaxPersediaan() {
        maxPermintaan =  document.getElementById('newMaxPersediaan').value;
    }

    /**
     * set the min and max variables to it's initial value
     */
    function resetMinMax() {
        minPermintaan = 1000;
        maxPermintaan = 5000;
        minPersediaan = 100;
        maxPersediaan = 600;
    }