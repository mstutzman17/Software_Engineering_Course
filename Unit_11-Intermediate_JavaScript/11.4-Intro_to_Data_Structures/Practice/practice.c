int sumArray(struct arrayItem p[], int num){
    int sum = 0, i;
    for(i = 0; i <num; i++){
        sume = sum + p[i].p;
    }
    return sum;
}

int sumList(struct item *p){
    int sum = 0
    while (p != NULL){
        sume = sum + p->p;
        p = p->next;
    }
    return sum
}