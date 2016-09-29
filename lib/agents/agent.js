class Agent {
	constructor(options) {
		this.gamma = options.gamma;
		this.numActions = options.numActions;
		this.tracer = Trace;
		this.t = 0;
		this.discount = new options.discount(options.discountParams);
		this.last_action = null;
	}

	selectAction(e) {
		return Math.floor(Math.random() * this.numActions);
	}

	update(a, e) {
		this.last_action = a;
		this.t++;
	}

	reward(e, dfr) {
		return this.discount(dfr, this.t) * this.utility(e);
	}

	utility(e) {
		return e.rew;
	}
}

Agent.params = [
	{ field: 'cycles', value: 2e2 },
];