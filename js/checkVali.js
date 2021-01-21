function Validation() {
    this.isValid = true;
    this.emptyCheck = function (value) {
        if (value == "") {
            alert("Task Empty");
            this.isValid = false;
        }
        return this.isValid;
    };
    this.coincidentToDo = function (value, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (value === arr[i].taskName) {
                return true;
            }

        }
        return false;
    };
    this.coincidentCompleted = function (value, completedArr) {
        for (var i = 0; i < completedArr.length; i++) {
            if (value === completedArr[i].taskName) {
                return true;
            }
        }
        return false;

    };
}
