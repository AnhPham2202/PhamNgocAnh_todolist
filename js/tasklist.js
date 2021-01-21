function TaskList() {
    this.arr = [];
    this.completedArr = [];
    this.addTask = function (task) {
        this.arr.push(task);
    }
    this.swapStatus = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === id) {
                this.completedArr.push(this.arr[i]);
                this.arr.splice(i, 1);
                return;
            }
        }
        for (var i = 0; i < this.completedArr.length; i++) {
            if (this.completedArr[i].id === id) {
                this.arr.push(this.completedArr[i]);
                this.completedArr.splice(i, 1);
                console.log(this.arr);
                console.log(this.completedArr);
                break;
            }
        }
    }
    this.delTask = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id === id) {
                this.arr.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < this.completedArr.length; i++) {
            if (this.completedArr[i].id === id) {
                this.completedArr.splice(i, 1);
                break;
            }
        }
    }
}